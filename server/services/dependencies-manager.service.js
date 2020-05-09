/* eslint-disable no-use-before-define */
const DependencyTree = require('../model/dependency-tree');
const depHttpService = require('./dependencies-http.service');
const Package = require('../model/package');


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
      resolve({ tree: root, size: pkgToPkgDepsCache.size });
    } else {
      const pkgDependencies = await depHttpService.getPackageDependencies(pkg);
      if (pkgDependencies.length === 0) {
        pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
        resolve({ tree: root, size: pkgToPkgDepsCache.size });
      } else {
        iterateOverDependenciesAndCallRecursively(pkgDependencies, promisesArr,
          root, pkgToPkgDepsCache);
        await Promise.all(promisesArr);
        pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
        resolve({ tree: root, size: pkgToPkgDepsCache.size });
      }
    }
  });
}


async function getPackageDependencies(pkgName) {
  const pkgVersion = await depHttpService.getPackageLatestVersion(pkgName);
  return getPackageDependenciesRecursively(new Package(pkgName, pkgVersion),
    new DependencyTree(), new Map());
}
module.exports.getPackageDependencies = getPackageDependencies;
module.exports.getPackageDependenciesRecursively = getPackageDependenciesRecursively;
