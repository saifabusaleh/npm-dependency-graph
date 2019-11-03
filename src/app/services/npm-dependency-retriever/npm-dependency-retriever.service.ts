import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from '../../types/Package';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ErrorCodes } from '../../enums/errorCodes';

@Injectable({
  providedIn: 'root'
})
export class NpmDependencyRetrieverService {

  private readonly REGISTRY_BASE_URL: string = 'https://registry.npmjs.org/';

  private readonly MINUTE_IN_MILLISECOND = 60000;
  constructor(private httpClient: HttpClient,
    private toaster: ToastrService) { }

  private buildRequestUrl(pkg: Package) {
    let pkgUrlSuffix;
    if (pkg.version) {
      pkgUrlSuffix = `${pkg.name}/${pkg.version}`;
    } else {
      pkgUrlSuffix = `${pkg.name}`;
    }
    let requestUrl = `${this.REGISTRY_BASE_URL}${pkgUrlSuffix}`;
    return requestUrl;
  }

  public getPackageLatestVersion(pkgName: string): Observable<string> {
    let pkg = new Package(pkgName, '');
    let requestUrl = this.buildRequestUrl(pkg);
    return new Observable(observer$ => {
      this.httpClient.get(requestUrl).pipe(timeout(this.MINUTE_IN_MILLISECOND), map((response: any) => (response.versions)))
        .subscribe((versionsObj: Object) => {
          try {
            const latestVersion: string = Object.keys(versionsObj)[Object.keys(versionsObj).length - 1];
            observer$.next(latestVersion);
            observer$.complete();
          } catch (err) {
            this.throwErrorWrapper(err, observer$);
          }

        }, (err) => {
          this.throwErrorWrapper(err, observer$);
        });
    });
  }

  public getPackageDependecies(pkg: Package): Observable<Package[]> {
    let requestUrl = this.buildRequestUrl(pkg);
    return new Observable(observer$ => {
      this.httpClient.get(requestUrl).pipe(timeout(this.MINUTE_IN_MILLISECOND), map((response: any) => (response.dependencies)))
        .subscribe((dependenciesObject: Object) => {
          try {
            observer$.next(this.parsePackageDependencies(dependenciesObject));
            observer$.complete();
          } catch (err) {
            this.throwErrorWrapper(err, observer$);
          }

        }, (err) => {
          if (err.error && err.error.code === ErrorCodes.METHOD_NOT_ALLOWED) {
            //this means that the packge version could not be found.
            //empty package dependencies is returned because we want to show
            //the package itself, even if it doesn't exist in the registry
            observer$.next([]);
            observer$.complete();
          } else {
            this.throwErrorWrapper(err, observer$);
          }
        });
    });
  }

  private parsePackageDependencies(dependenciesObject: Object): Package[] {
    if (!dependenciesObject) { // no deps found
      return [];
    }
    let pkgDependencies: Package[] = [];
    Object.keys(dependenciesObject).map((key) => {
      let pkg = new Package(key, this.parsePackageVersion(dependenciesObject[key]));
      pkgDependencies.push(pkg);
    });
    return pkgDependencies;
  }

  private parsePackageVersion(version: string) {
    return version.replace(/[><=^~ ]/g, '');
  }


  private getErrorMessage(error) {
    let errorMessage = '';
    if (error.name === ErrorCodes.REQUEST_TIMEOUT) {
      errorMessage = `Request timeout`;
    } else if (error && error.error) {
      if (error.error.includes && error.error.includes('version not found')) {
        errorMessage = `version ${error.url.split('/')[4]} for package ${error.url.split('/')[3]} not found!`;
      } else if ((error.error === 'Not Found') || (error.error.error && error.error.error.toLocaleLowerCase() === 'not found')) {
        errorMessage = `package ${error.url.split('/')[3]} not found!`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    } else {
      errorMessage = ` Failed to parse results from API`;
    }
    return errorMessage;
  }

  private throwErrorWrapper(err, observer$) {
    const errMsg = this.handleError(err);
    observer$.error(errMsg);
    observer$.complete();
  }

  private handleError(error) {
    const errorMessage = this.getErrorMessage(error);
    this.toaster.error(errorMessage, 'Error', {
      timeOut: 200000
    });
    return errorMessage;
  }
}
