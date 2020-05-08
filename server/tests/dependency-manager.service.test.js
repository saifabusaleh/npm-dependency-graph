const DependencyTree = require("../model/dependency-tree");

const DependencyManagerService = require( "../services/dependencies-manager.service" );
const DependencyHttpService = require( "../services/dependencies-http.service" );


describe("DependencyManagerService", () => {
	describe("getPackageDependenciesRecursively", () => {
		const rootPkgName = "file-system";
		const rootPkgVersion = "2.0.1";
		it("should return value from cache when package exist in cache", async (done) => {
			const pkg = { name: "file-system", version: "2.0.1" };
			const pkgDependencyPkg = { name: "utils-extend", version: "1.0.0" };
			const pkgDependencyTree = new DependencyTree(pkgDependencyPkg, []);
			const pkgToPkgDepsCache = new Map();
			pkgToPkgDepsCache.set(`${rootPkgName}${rootPkgVersion}`, pkgDependencyTree);
			const depTree = new DependencyTree();
			const pkgDeps = await DependencyManagerService
				.getPackageDependenciesRecursively(pkg, depTree, pkgToPkgDepsCache);
			expect(pkgDeps.package).toEqual(pkg);
			expect(pkgDeps.dependencies).toEqual(pkgDependencyTree);

			done();
		});

		it("should add to cache and return when pkg has no dependencies", async (done) => {
			const pkg = { name: "file-system", version: "2.0.1" };
			const pkgToPkgDepsCache = new Map();
			const depTree = new DependencyTree();

			jest.spyOn(DependencyHttpService, "retrievePackageDependencies").mockReturnValue([]);
			const pkgDeps = await DependencyManagerService
				.getPackageDependenciesRecursively(pkg, depTree, pkgToPkgDepsCache);
			expect(pkgDeps.package).toEqual(pkg);
			expect(pkgDeps.dependencies).toEqual([]);
			expect(pkgToPkgDepsCache.get("file-system2.0.1")).toEqual([]);
			done();
		});
	});
});
