import { ErrorCodes } from '../../enums/error-codes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from '../../types/package';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { DependencyAPIResponse } from 'src/app/types/dependency-api-response';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly BASE_URL: string = 'http://localhost:4444/api/npm-depency-retriever/';

  private readonly BASE_URL_PROD: string = 'api/npm-depency-retriever/';

  constructor(private httpClient: HttpClient,
              private toaster: ToastrService) { }

  private buildRequestUrl() {

    const baseUrl: string = environment.production ? this.BASE_URL_PROD : this.BASE_URL;
    return baseUrl;
  }

  public getPackageDependecies(pkgName: string): Observable<DependencyAPIResponse> {
    const pkg = new Package(pkgName, '');
    const requestUrl = this.buildRequestUrl();
    return new Observable(observer$ => {
      this.httpClient.post(requestUrl, {packageName: pkg.name})
        .subscribe((response: DependencyAPIResponse) => {
          try {
            observer$.next(response);
            observer$.complete();
          } catch (err) {
            this.throwErrorWrapper(err, observer$);
          }

        }, (err) => {
            this.throwErrorWrapper(err, observer$);
        });
    });
  }


  private getErrorMessage(error) {
    if (error.status === ErrorCodes.NO_RESPONSE) {
      return 'Failed to reach server';
    }
    if (error.error && error.error.message) {
      return error.error.message;
    }
    return 'Failed to parse data from API';
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
