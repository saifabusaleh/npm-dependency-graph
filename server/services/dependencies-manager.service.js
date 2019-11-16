const DependencyTree = require("../model/DependencyTree");
const depRetrieverService = require("./depdencies-retriever.service");
const Package = require("../model/Package");

const pkgToPkgDepsCache = new Map();

function iterateDependenciesAndCallRecursively(pkgDependencies,
	promisesArr, root) {
	pkgDependencies.forEach((pkgDependecy) => {
		const newDepTree = new DependencyTree();
		const depsLength = root.dependencies.push(newDepTree);
		// eslint-disable-next-line no-use-before-define
		const promise = getPackageDependenciesRecursively(pkgDependecy,
			root.dependencies[depsLength - 1]);
		promisesArr.push(promise);
	});
}

async function getPackageDependenciesRecursively(pkg, root) {
	root.package = pkg;
	if (!root.dependencies) {
		root.dependencies = [];
	}
	const promisesArr = [];
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (resolve) => {
		if (pkgToPkgDepsCache.get(pkg.name + pkg.version)) {
			root.dependencies = pkgToPkgDepsCache.get(pkg.name + pkg.version);
			resolve(root);
		} else {
			const pkgDependencies = await depRetrieverService.getPackageDependencies(pkg);
			if (pkgDependencies.length === 0) {
				pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
				resolve(root);
			} else {
				iterateDependenciesAndCallRecursively(pkgDependencies, promisesArr, root);
				await Promise.all(promisesArr);
				pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
				resolve(root);
			}
		}
	});
}


async function getPackageDependencies(pkgName) {
	const pkgVersion = await depRetrieverService.getPackageLatestVersion(pkgName);
	const pkg = new Package(pkgName, pkgVersion);
	const depTree = new DependencyTree();
	return getPackageDependenciesRecursively(pkg, depTree);
}
module.exports.getPackageDependencies = getPackageDependencies;
