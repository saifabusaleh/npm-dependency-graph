/* eslint-disable no-use-before-define */
const DependencyTree = require("../model/dependency-tree");
const depRetrieverService = require("./depdencies-retriever.service");
const Package = require("../model/package");


function iterateOverDependenciesAndCallRecursively(pkgDependencies,
	promisesArr, root, pkgToPkgDepsCache) {
	pkgDependencies.forEach((pkgDependecy) => {
		const newDepTree = new DependencyTree();
		const depsLength = root.dependencies.push(newDepTree);
		// eslint-disable-next-line no-use-before-define
		const promise = getPackageDependenciesRecursively(pkgDependecy,
			root.dependencies[depsLength - 1], pkgToPkgDepsCache);
		promisesArr.push(promise);
	});
}

async function getPackageDependenciesRecursively(pkg, root, pkgToPkgDepsCache) {
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
			const pkgDependencies = await depRetrieverService.retrievePackageDependencies(pkg);
			if (pkgDependencies.length === 0) {
				pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
				resolve(root);
			} else {
				iterateOverDependenciesAndCallRecursively(pkgDependencies, promisesArr,
					root, pkgToPkgDepsCache);
				await Promise.all(promisesArr);
				pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
				resolve(root);
			}
		}
	});
}


async function getPackageDependencies(pkgName) {
	const pkgVersion = await depRetrieverService.retrievePackageLatestVersion(pkgName);
	const pkg = new Package(pkgName, pkgVersion);
	const depTree = new DependencyTree();
	const pkgToPkgDepsCache = new Map();
	const pkgDeps = await getPackageDependenciesRecursively(pkg, depTree, pkgToPkgDepsCache);
	return pkgDeps;
}
module.exports.getPackageDependencies = getPackageDependencies;
module.exports.getPackageDependenciesRecursively = getPackageDependenciesRecursively;
