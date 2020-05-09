const axios = require("axios");
const Package = require("../model/package");
const semverService = require("./semver.service");
const ErrorCodes = require("../enums/ErrorResponses");
const REGISTRY_BASE_URL = "http://registry.npmjs.org/";


async function getPackageLatestVersion(pkgName) {
	const availableVersions = await getPackageAvailableVersions(pkgName);
	return availableVersions[availableVersions.length-1];
}


async function getPackageDependencies(pkg) {
	const requestUrl = buildRequestUrl(pkg);
	let pkgDeps;
	try {
		const axiosRes = await axios.get(requestUrl);
		pkgDeps = await parsePackageDependencies(axiosRes.data.dependencies);
	} catch (err) {
		if (err.response && err.response.data && err.response.data.code
			&& err.response.data.code === ErrorCodes.METHOD_NOT_ALLOWED) {
			return [];
		}
		handleError(err);
	}
	return pkgDeps;
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

async function getPackageAvailableVersions(pkgName) {
	const pkg = new Package(pkgName, "");
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
	if(!isNaN(version[0])) {
		return version;
	}
	const allAvailableVersions = await getPackageAvailableVersions(pkgName);
	return semverService.resolveVersion(version, allAvailableVersions)
	//return version.replace(/[><=^~ ]/g, "");
}

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
	let errorMessage = "";
	if (error.name === ErrorCodes.REQUEST_TIMEOUT) {
		errorMessage = "Request timeout";
	} else if (error && error.response && error.response.data
		&& error.response.data.error) {
		const errorData = error.response.data.error;
		if ((errorData.toLocaleLowerCase() === "not found")) {
			errorMessage = "package not found!";
		}
	} else {
		errorMessage = "Failed to parse results from API";
	}
	return errorMessage;
}

function handleError(error) {
	const errorMessage = getErrorMessage(error);
	throw new Error(errorMessage);
}

module.exports.getPackageDependencies = getPackageDependencies;
module.exports.getPackageLatestVersion = getPackageLatestVersion;
