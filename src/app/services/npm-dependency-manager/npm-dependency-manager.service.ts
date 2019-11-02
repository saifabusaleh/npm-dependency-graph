import { Observable, forkJoin } from 'rxjs';
import { DependencyTree } from '../../types/dependencyTree';
import { NpmDependencyRetrieverService } from '../npm-dependency-retriever/npm-dependency-retriever.service';
import { Injectable } from '@angular/core';
import { Package } from '../../types/Package';

@Injectable({
  providedIn: 'root'
})
export class NpmDependencyManagerService {

  private pkgToPkgDepsCache: Map<Package, DependencyTree[]>;

  constructor(private depRetrieverService: NpmDependencyRetrieverService) {
    this.pkgToPkgDepsCache = new Map();
  }


  public getPackageDependencies(pkg: Package): Observable<DependencyTree> {
    let depTree: DependencyTree = new DependencyTree();
    return this.getPackageDependenciesRecursively(pkg, depTree);
  }

  public getPackageDependenciesRecursively(pkg: Package, root: DependencyTree): Observable<DependencyTree> {
    root.package = pkg;
    let obsArray$ = [];
    return new Observable((observer$) => {
      if (this.pkgToPkgDepsCache.get(pkg)) {
        root.dependencies = this.pkgToPkgDepsCache.get(pkg);
        observer$.next(root);
        observer$.complete();
      }
      this.depRetrieverService.getPackageDependecies(pkg).subscribe((pkgDependencies: Package[]) => {
        if (pkgDependencies.length === 0) {
          this.pkgToPkgDepsCache.set(pkg, root.dependencies);
          observer$.next(root);
          observer$.complete();
        }
        this.iterateDependenciesAndCallRecursively(pkgDependencies, obsArray$, root);
        forkJoin(obsArray$).subscribe(() => {
          this.pkgToPkgDepsCache.set(pkg, root.dependencies);
          observer$.next(root);
          observer$.complete();
        });
      });
    });
  }

  private iterateDependenciesAndCallRecursively(pkgDependencies: Package[],
    promisesArr: Observable<DependencyTree>[], root: DependencyTree) {

    for (const pkgDependecy of pkgDependencies) {
      let newDepTree: DependencyTree = new DependencyTree();
      if (!root.dependencies) {
        root.dependencies = [];
      }
      const depsLength: number = root.dependencies.push(newDepTree);
      const obs$: Observable<DependencyTree> = this.getPackageDependenciesRecursively(pkgDependecy, root.dependencies[depsLength - 1]);
      promisesArr.push(obs$);
    }
  }
}
