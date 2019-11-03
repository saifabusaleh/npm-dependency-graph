import { NpmDependencyRetrieverService } from './../npm-dependency-retriever/npm-dependency-retriever.service';
import { DependencyTree } from './../../types/dependencyTree';
import { TestBed, inject } from '@angular/core/testing';

import { NpmDependencyManagerService } from './npm-dependency-manager.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { Package } from 'src/app/types/Package';

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
    it('should call getPackageDependenciesRecursively', inject(
      [NpmDependencyManagerService], (depManager: NpmDependencyManagerService) => {
        const pkg = new Package('file-system', '2.0.1');
        spyOn(depManager, 'getPackageDependenciesRecursively');
        depManager.getPackageDependencies(pkg);
        expect(depManager.getPackageDependenciesRecursively).toHaveBeenCalled();
      }));
  });

  fdescribe('getPackageDependenciesRecursively', () => {
    it('should return from cache when the package have dependencies', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
        const pkg = new Package('file-system', '2.0.1');
        const cacheTree = new DependencyTree();
        const pkgToDepTreeCache: Map<string, DependencyTree[]> = new Map();
        pkgToDepTreeCache.set('file-system2.0.1', [cacheTree]);
        spyOn(depRetriever, 'getPackageDependecies');
        depManager.getPackageDependenciesRecursively(pkg, new DependencyTree(), pkgToDepTreeCache)
          .subscribe((res) => {
            expect(res.package).toEqual(pkg);
            expect(res.dependencies).toEqual([cacheTree]);
            expect(depRetriever.getPackageDependecies).not.toHaveBeenCalled();
          });
      }));

    it('should return from cache when the cache package doesnt have dependencies', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
        const pkg = new Package('file-system', '2.0.1');
        const pkgToDepTreeCache: Map<string, DependencyTree[]> = new Map();
        pkgToDepTreeCache.set('file-system2.0.1', []);
        spyOn(depRetriever, 'getPackageDependecies');
        depManager.getPackageDependenciesRecursively(pkg, new DependencyTree(), pkgToDepTreeCache)
          .subscribe((res) => {
            expect(res.package).toEqual(pkg);
            expect(res.dependencies).toEqual([]);
            expect(depRetriever.getPackageDependecies).not.toHaveBeenCalled();
          });

      }));
  });
});
