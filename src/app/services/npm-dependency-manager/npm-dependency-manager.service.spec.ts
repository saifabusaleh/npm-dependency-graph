import { NpmDependencyRetrieverService } from './../npm-dependency-retriever/npm-dependency-retriever.service';
import { DependencyTree } from './../../types/dependencyTree';
import { TestBed, inject } from '@angular/core/testing';

import { NpmDependencyManagerService } from './npm-dependency-manager.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { Package } from 'src/app/types/Package';
import { of } from 'rxjs';

const ToastrStub = {
  error(msg): void { //
  }
};

describe('DependencyManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [NpmDependencyManagerService,
      { provide: ToastrService, useValue: ToastrStub }]
  }));

  it('should be created', () => {
    const service: NpmDependencyManagerService = TestBed.get(NpmDependencyManagerService);
    expect(service).toBeTruthy();
  });

  describe('getPackageDependencies', () => {

    const rootPkgName: string = 'file-system';
    const rootPkgVersion: string = '2.0.1';

    it('should call getPackageDependenciesRecursively', inject(
      [NpmDependencyManagerService], (depManager: NpmDependencyManagerService) => {
        const pkg = new Package(rootPkgName, rootPkgVersion);
        depManager.getPackageDependencies(pkg);
      }));

    it('should return from cache when the package exist in cache and the package doesnt have dependencies', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
        const pkg = new Package(rootPkgName, rootPkgVersion);
        const pkgToDepTreeCache: Map<string, DependencyTree[]> = depManager.pkgToPkgDepsCache;
        pkgToDepTreeCache.set(`${rootPkgName}${rootPkgVersion}`, []);
        spyOn(depRetriever, 'getPackageDependecies');
        depManager.getPackageDependencies(pkg)
          .subscribe((obs$: DependencyTree) => {
            expect(obs$.package).toEqual(pkg);
            expect(obs$.dependencies).toEqual([]);
            expect(depRetriever.getPackageDependecies).not.toHaveBeenCalled();
          });
      }));

    it('should return the pkg itself and add it to cache when the package doesnt exist in cache and doesnt have dependencies', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
        const pkg = new Package(rootPkgName, rootPkgVersion);
        const pkgToDepTreeCache: Map<string, DependencyTree[]> = depManager.pkgToPkgDepsCache;
        spyOn(depRetriever, 'getPackageDependecies').and.returnValue(of([]));
        depManager.getPackageDependencies(pkg)
          .subscribe((obs$: DependencyTree) => {
            expect(obs$.package).toEqual(pkg);
            expect(obs$.dependencies).toEqual([]);
            expect(depRetriever.getPackageDependecies).toHaveBeenCalledWith(pkg);
            expect(pkgToDepTreeCache.get(`${rootPkgName}${rootPkgVersion}`)).toEqual([]);
          });
      }));

    it('should check that the dependecy tree is built correctly and cache is correctly filled', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
        const rootPkgDep1Name: string = 'file-match';
        const rootPkgDep1Version: string = '1.0.1';
        const rootPkgDep2Name: string = 'utils-extend';
        const rootPkgDep2Version: string = '1.0.4';
        const pkg = new Package(rootPkgName, rootPkgVersion);

        const rootPkgDependencies: Package[] = [new Package(rootPkgDep1Name, rootPkgDep1Version), new Package(rootPkgDep2Name, rootPkgDep2Version)];
        spyOn(depRetriever, 'getPackageDependecies').and.returnValues(of(rootPkgDependencies), of([]), of([]));
        depManager.getPackageDependencies(pkg)
          .subscribe((obs$: DependencyTree) => {
            expect(obs$.package).toEqual(pkg);
            const pkg1Dep: DependencyTree = new DependencyTree();
            pkg1Dep.package = rootPkgDependencies[0];
            pkg1Dep.dependencies = [];
            const pkg2Dep: DependencyTree = new DependencyTree();
            pkg2Dep.package = rootPkgDependencies[1];
            pkg2Dep.dependencies = [];

            expect(obs$.dependencies).toEqual([pkg1Dep, pkg2Dep]);
            expect(depManager.pkgToPkgDepsCache.get(`${rootPkgDep1Name}${rootPkgDep1Version}`)).toEqual([]);
            expect(depManager.pkgToPkgDepsCache.get(`${rootPkgDep2Name}${rootPkgDep2Version}`)).toEqual([]);
            expect(depManager.pkgToPkgDepsCache.get(`${rootPkgName}${rootPkgVersion}`)).toEqual([pkg1Dep, pkg2Dep]);
          });
      }));
  });
});
