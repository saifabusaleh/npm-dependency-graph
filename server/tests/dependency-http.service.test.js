describe("DependencyHttpService", () => {
	const axios = require("axios");
	const mockAdapter = require("axios-mock-adapter");

	const dependencyHttpService = require("../services/dependencies-http.service");
	const mockAxios = new mockAdapter(axios);
	describe("getPackageLatestVersion", () => {
		const mockVersionsResponse = () => {
			const dummyVersionsResponse = {};
			(dummyVersionsResponse).versions = {};
			(dummyVersionsResponse).versions["1.0"] = { name: "val" };
			(dummyVersionsResponse).versions["1.5"] = { name: "val1" };
			(dummyVersionsResponse).versions["2.0"] = { name: "val2" };
			return dummyVersionsResponse;
		};
		it("should return correct version and call correct url", async (done) => {
			const versionsRes = mockVersionsResponse();
			mockAxios.onGet("http://registry.npmjs.org/file-system").reply(200, versionsRes);
			const pkg = { name: "file-system", version: "2.0" };
			const expectedVersion = Object.keys((versionsRes).versions)[Object
				.keys((versionsRes).versions).length - 1];
			const latestVersion = await dependencyHttpService.getPackageLatestVersion(pkg.name);
			expect(latestVersion).toEqual(expectedVersion);
			done();
		});

		afterEach(() => {
			mockAxios.reset();
		});
	});


	describe("getPackageDependencies", () => {
		const dependenciesResponse = {

			dependencies: {
				"file-match": "^1.0.1",
				"utils-extend": "=2.0",
				fs: ">5.0",
				mocha: "~ 2.2.0",
			},
		};
		it("should parse package dependencies correctly", async (done) => {
			mockAxios.onGet("http://registry.npmjs.org/file-system/2.0").reply(200, dependenciesResponse);
			const pkg = { name: "file-system", version: "2.0" };
			const pkgDeps = await dependencyHttpService.getPackageDependencies(pkg);
			expect(pkgDeps.length).toEqual(4);
			let i = 0;
			Object.entries(dependenciesResponse.dependencies).forEach(([key]) => {
				expect(pkgDeps[i].name).toEqual(key);
				i += 1;
			});
			expect(pkgDeps[0].version).toEqual("1.0.1");
			expect(pkgDeps[1].version).toEqual("2.0");
			expect(pkgDeps[2].version).toEqual("5.0");
			expect(pkgDeps[3].version).toEqual("2.2.0");
			done();
		});

		afterEach(() => {
			mockAxios.reset();
		});
	});
});
