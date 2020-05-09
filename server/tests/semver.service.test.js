describe("SemverService", () => {
    const semverService = require("../services/semver.service");

    it("should throw error if version not found in the availableVersions", () => {
        try {
            semverService.resolveVersion("~1.2.0", ["1.2.1", "1.2.2", "1.2.3", "1.3.0"]);
            expect(true).toEqual(false);
        } catch (e) {
            expect(e.message).toContain("version not found");
        }
    });

    it("should call resolveByCaret and resolve correctly when version is single digit", () => {
        const resolvedVersion =  semverService.resolveVersion("1", ["1.0.0", "1.2.2", "1.2.3", "1.3.0"]);
        expect(resolvedVersion).toEqual("1.3.0");
    });

    it("should call resolveByCaret and resolve correctly when version is single digit with caret", () => {
        const resolvedVersion =  semverService.resolveVersion("^1", ["1.0.0", "1.2.2", "1.2.3", "1.3.0"]);
        expect(resolvedVersion).toEqual("1.3.0");
    });

    it("should call resolveByCaret and resolve correctly when version is single digit with tilde", () => {
        const resolvedVersion =  semverService.resolveVersion("~1", ["1.0.0", "1.2.2", "1.2.3", "1.3.0"]);
        expect(resolvedVersion).toEqual("1.3.0");
    });

    it("should call resolveByTilde and resolve correctly when version is single digit", () => {
        const resolvedVersion =  semverService.resolveVersion("1.2", ["1.0.0", "1.2.0", "1.2.3", "1.3.0"]);
        expect(resolvedVersion).toEqual("1.2.3");
    });

    it("should call resolveByTilde and resolve correctly when version is single digit with caret", () => {
        const resolvedVersion =  semverService.resolveVersion("^1.2", ["1.0.0", "1.2.0", "1.2.3", "1.3.0"]);
        expect(resolvedVersion).toEqual("1.2.3");
    });

    it("should call resolveByTilde and resolve correctly when version is single digit with tilde", () => {
        const resolvedVersion =  semverService.resolveVersion("~1.2", ["1.0.0", "1.2.0", "1.2.3", "1.3.0"]);
        expect(resolvedVersion).toEqual("1.2.3");
    });



    describe("should parse symbol correctly", () => {
        it("should remove the symbol when symbol is >", () => {
            const resolvedVersion = semverService.resolveVersion(">1.2.0", []);
            expect(resolvedVersion).toEqual("1.2.0");
        })
        it("should remove the symbol when symbol is <", () => {
            const resolvedVersion = semverService.resolveVersion("<1.2.0", []);
            expect(resolvedVersion).toEqual("1.2.0");
        })
        it("should remove the symbol when symbol is =", () => {
            const resolvedVersion = semverService.resolveVersion("=1.2.0", []);
            expect(resolvedVersion).toEqual("1.2.0");
        })
        it("should keep the version if it doesn't have symbol", () => {
            const resolvedVersion = semverService.resolveVersion("1.2.0", []);
            expect(resolvedVersion).toEqual("1.2.0");
        })
    })

    describe("resolveByTilde()", () => {
        it("should resolve correctly the package", () => {
            const resolvedVersion = semverService.resolveVersion("~2.2.0", ["1.3.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3", "2.3.0"]);
            expect(resolvedVersion).toEqual("2.2.3");
        })
        it("should resolve correctly the package when there is no higher minor version", () => {
            const resolvedVersion = semverService.resolveVersion("~2.2.0", ["1.3.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3"]);
            expect(resolvedVersion).toEqual("2.2.3");
        })
    })

    describe("resolveByCaret()", () => {
        it("should resolve correctly the package", () => {
            const resolvedVersion = semverService.resolveVersion("^2.2.0", ["2.2.0", "2.2.1", "2.3.0", "2.3.1"]);
            expect(resolvedVersion).toEqual("2.3.1");
        })
        it("should resolve correctly the package when there is no higher major version", () => {
            const resolvedVersion = semverService.resolveVersion("^2.2.0", ["1.2.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3"]);
            expect(resolvedVersion).toEqual("2.2.3");
        })
    })

});