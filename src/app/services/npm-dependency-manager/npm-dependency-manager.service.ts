import { Observable, forkJoin } from 'rxjs';
import { DependencyTree } from '../../types/dependencyTree';
import { NpmDependencyRetrieverService } from '../npm-dependency-retriever/npm-dependency-retriever.service';
import { Injectable } from '@angular/core';
import { Package } from '../../types/Package';

@Injectable({
  providedIn: 'root'
})
export class NpmDependencyManagerService {

  private pkgToPkgDepsCache: Map<string, DependencyTree[]>;

  constructor(private depRetrieverService: NpmDependencyRetrieverService) {
    this.pkgToPkgDepsCache = new Map();
  }


  public getPackageDependencies(pkg: Package): Observable<DependencyTree> {
    let depTree: DependencyTree = new DependencyTree();
    return this.getPackageDependenciesRecursively(pkg, depTree, this.pkgToPkgDepsCache);
  }

  public getPackageDependenciesRecursively(pkg: Package, root: DependencyTree,
    pkgToPkgDepsCache: Map<string, DependencyTree[]>): Observable<DependencyTree> {
    root.package = pkg;
    if (!root.dependencies) {
      root.dependencies = [];
    }
    let obsArray$ = [];
    return new Observable((observer$) => {
      if (pkgToPkgDepsCache.get(pkg.name + pkg.version)) {
        root.dependencies = pkgToPkgDepsCache.get(pkg.name + pkg.version);
        observer$.next(root);
        observer$.complete();
      } else {
        this.depRetrieverService.getPackageDependecies(pkg).subscribe((pkgDependencies: Package[]) => {
          if (pkgDependencies.length === 0) {
            pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
            observer$.next(root);
            observer$.complete();
          } else {
            this.iterateDependenciesAndCallRecursively(pkgDependencies, obsArray$, root);
            forkJoin(obsArray$).subscribe(() => {
              pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
              observer$.next(root);
              observer$.complete();
            });
          }
        });
      }
    });
  }

  private iterateDependenciesAndCallRecursively(pkgDependencies: Package[],
    promisesArr: Observable<DependencyTree>[], root: DependencyTree) {

    for (const pkgDependecy of pkgDependencies) {
      let newDepTree: DependencyTree = new DependencyTree();
      const depsLength: number = root.dependencies.push(newDepTree);
      const obs$: Observable<DependencyTree> = this.getPackageDependenciesRecursively(pkgDependecy, root.dependencies[depsLength - 1], this.pkgToPkgDepsCache);
      promisesArr.push(obs$);
    }
  }
}
