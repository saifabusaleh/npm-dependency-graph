export class Package {

  constructor(pkgName: string, pkgVersion) {
    this.name = pkgName;
    this.version = pkgVersion;
  }
  name: string;
  version: string;
}
