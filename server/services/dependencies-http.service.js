const axios = require('axios');
const Package = require('../model/package');
const semverService = require('./semver.service');
const ErrorCodes = require('../enums/errorResponses');

const REGISTRY_BASE_URL = 'http://registry.npmjs.org/';
const pkgToResolvedPackageVersionCache = new Map();

function buildRequestUrl(pkg) {
  let pkgUrlSuffix;
  if (pkg.version) {
    pkgUrlSuffix = `${pkg.name}/${pkg.version}`;
  } else {
    pkgUrlSuffix = `${pkg.name}`;
  }
  return `${REGISTRY_BASE_URL}${pkgUrlSuffix}`;
}

function getErrorMessage(error) {
  let errorMessage = '';
  if (error.name === ErrorCodes.REQUEST_TIMEOUT) {
    errorMessage = 'Request timeout';
  } else if (error && error.response && error.response.data && error.response.data.error) {
    const errorData = error.response.data.error;
    if ((errorData.toLocaleLowerCase() === 'not found')) {
      errorMessage = 'package not found!';
    }
  } else {
    errorMessage = 'Failed to parse results from API';
  }
  return errorMessage;
}

function handleError(error) {
  const errorMessage = getErrorMessage(error);
  throw new Error(errorMessage);
}

async function getPackageAvailableVersions(pkgName) {
  const pkg = new Package(pkgName, '');
  const requestUrl = buildRequestUrl(pkg);
  let availableVersions;
  try {
    const res = await axios.get(requestUrl);
    const versionsObj = res.data.versions;
    availableVersions = Object.keys(versionsObj);
  } catch (err) {
    handleError(err);
  }
  return availableVersions;
}


async function parsePackageVersion(pkgName, version) {
  if (!isNaN(version[0]) && version.split('.').length === 3) {
    return version;
  }
  if (pkgToResolvedPackageVersionCache.get(pkgName + version)) {
    console.log('found in cache', pkgName + version);
    return pkgToResolvedPackageVersionCache.get(pkgName + version);
  }
  const allAvailableVersions = await getPackageAvailableVersions(pkgName);
  const resolvedVersion = semverService.resolveVersion(version, allAvailableVersions);
  pkgToResolvedPackageVersionCache.set(pkgName + version, resolvedVersion);
  return resolvedVersion;
}

async function getPackageLatestVersion(pkgName) {
  const availableVersions = await getPackageAvailableVersions(pkgName);
  return availableVersions[availableVersions.length - 1];
}

async function parsePackageDependencies(dependenciesObject) {
  if (!dependenciesObject) { // no deps found
    return [];
  }
  const pkgDependencies = [];
  const depObject = Object.keys(dependenciesObject);
  await Promise.all(depObject.map(async (pkgName) => {
    const resolvedVersion = await parsePackageVersion(pkgName, dependenciesObject[pkgName]);
    const pkg = new Package(pkgName, resolvedVersion);
    pkgDependencies.push(pkg);
  }));
  return pkgDependencies;
}

async function getPackageDependencies(pkg) {
  const requestUrl = buildRequestUrl(pkg);
  let pkgDeps;
  try {
    const axiosRes = await axios.get(requestUrl);
    pkgDeps = await parsePackageDependencies(axiosRes.data.dependencies);
  } catch (err) {
    if (err.response && err.response.data && err.response.data.code && err.response.data.code === ErrorCodes.METHOD_NOT_ALLOWED) {
      return [];
    }
    handleError(err);
  }
  return pkgDeps;
}

module.exports.getPackageDependencies = getPackageDependencies;
module.exports.getPackageLatestVersion = getPackageLatestVersion;
