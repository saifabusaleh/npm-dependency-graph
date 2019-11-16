const axios = require("axios");
const Package = require("../model/Package");
const ErrorCodes = require("../enums/errorCodes");

const REGISTRY_BASE_URL = "http://registry.npmjs.org/";

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
function buildRequestUrl(pkg) {
	let pkgUrlSuffix;
	if (pkg.version) {
		pkgUrlSuffix = `${pkg.name}/${pkg.version}`;
	} else {
		pkgUrlSuffix = `${pkg.name}`;
	}
	return `${REGISTRY_BASE_URL}${pkgUrlSuffix}`;
}

function parsePackageVersion(version) {
	return version.replace(/[><=^~ ]/g, "");
}

function parsePackageDependencies(dependenciesObject) {
	if (!dependenciesObject) { // no deps found
		return [];
	}
	const pkgDependencies = [];
	Object.keys(dependenciesObject).map((key) => {
		const pkg = new Package(key, parsePackageVersion(dependenciesObject[key]));
		pkgDependencies.push(pkg);
		return true;
	});
	return pkgDependencies;
}

async function getPackageLatestVersion(pkgName) {
	const pkg = new Package(pkgName, "");
	const requestUrl = buildRequestUrl(pkg);
	let latestVersion;
	try {
		const res = await axios.get(requestUrl);
		const versionsObj = res.data.versions;
		latestVersion = Object.keys(versionsObj)[Object.keys(versionsObj).length - 1];
	} catch (err) {
		handleError(err);
	}

	return latestVersion;
}

async function getPackageDependencies(pkg) {
	const requestUrl = buildRequestUrl(pkg);
	let pkgDeps;
	try {
		const res = await axios.get(requestUrl);
		pkgDeps = parsePackageDependencies(res.data.dependencies);
	} catch (err) {
		if (err.response && err.response.data && err.response.data.code
			&& err.response.data.code === ErrorCodes.METHOD_NOT_ALLOWED) {
			return [];
		}
		handleError(err);
	}
	return pkgDeps;
}

module.exports.getPackageDependencies = getPackageDependencies;
module.exports.getPackageLatestVersion = getPackageLatestVersion;
