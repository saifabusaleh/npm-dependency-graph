import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';
import { DependencyTree } from 'src/app/types/dependency-tree';
import { DependencyAPIResponse } from 'src/app/types/dependency-api-response';

const ToastrStub = {
  error(msg): void { //
  }
};
describe('HttpService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService,
        { provide: ToastrService, useValue: ToastrStub }]
    });
  });

  it('should be created', () => {
    const depRetrieverservice: HttpService = TestBed.get(HttpService);
    expect(depRetrieverservice).toBeTruthy();
  });

  describe('getPackageDependecies', () => {
    const simpleDependenciesResponse = {
      dependencies: [
        {
          dependencies: [
            {
              dependencies: [

              ],
              package: {
                name: 'utils-extend',
                version: '1.0.6'
              }
            }
          ],
          package: {
            name: 'file-match',
            version: '1.0.1'
          }
        },
        {
          dependencies: [

          ],
          package: {
            name: 'utils-extend',
            version: '1.0.4'
          }
        }
      ],
      package: {
        name: 'file-system',
        version: '2.2.2'
      }
    };
    it('should call the correct url and get the dependencies', inject(
      [HttpTestingController, HttpService],
      (httpMock: HttpTestingController, dataService: HttpService) => {
        const pkgName = 'testPkg';
        dataService.getPackageDependecies(pkgName).subscribe((depRes: DependencyAPIResponse) => {
          expect(depRes.tree.package.name).toEqual('file-system');
          expect(depRes.tree.package.version).toEqual('2.2.2');
          expect(depRes.tree.dependencies[0].package.name).toEqual('file-match');
          expect(depRes.tree.dependencies[0].package.version).toEqual('1.0.1');
          expect(depRes.tree.dependencies[0].dependencies[0].package.name).toEqual('utils-extend');
          expect(depRes.tree.dependencies[0].dependencies[0].package.version).toEqual('1.0.6');
          expect(depRes.tree.dependencies[1].package.name).toEqual('utils-extend');
          expect(depRes.tree.dependencies[1].package.version).toEqual('1.0.4');
          expect(depRes.tree.dependencies[1].dependencies).toEqual([]);
        });
        const mockReq = httpMock.expectOne(`http://localhost:4444/api/npm-depency-retriever/`);
        expect(mockReq.request.method).toBe('POST');
        expect(mockReq.request.body).toEqual({ packageName: 'testPkg' });
        mockReq.flush(simpleDependenciesResponse);
      }));

    it('should show toaster error when there is no connection to server', inject(
      [HttpTestingController, HttpService, ToastrService],
      (httpMock: HttpTestingController, dataService: HttpService, toastrService: ToastrService) => {
        const pkgName = 'testPkg';
        spyOn(toastrService, 'error');
        dataService.getPackageDependecies(pkgName).subscribe((depRes: DependencyAPIResponse) => {

          expect(true).toBe(false);
        }, (err) => {
          expect(err).toContain('Failed to reach server');
        });
        const mockReq = httpMock.expectOne(`http://localhost:4444/api/npm-depency-retriever/`);
        const mockErrorResponse = { status: 0, statusText: 'OK' };
        expect(mockReq.request.method).toBe('POST');
        expect(mockReq.request.body).toEqual({ packageName: 'testPkg' });
        const noServerConnectionErrorResponse = {
        };
        mockReq.flush(noServerConnectionErrorResponse, mockErrorResponse);
        expect(toastrService.error).toHaveBeenCalled();

      }));


    it('should show toaster error when package is not found', inject(
      [HttpTestingController, HttpService, ToastrService],
      (httpMock: HttpTestingController, dataService: HttpService, toastrService: ToastrService) => {
        const pkgName = 'testPkg';
        spyOn(toastrService, 'error');
        dataService.getPackageDependecies(pkgName).subscribe((depRes: DependencyAPIResponse) => {

          expect(true).toBe(false);
        }, (err) => {
          expect(err).toContain('package not found!');
        });
        const mockReq = httpMock.expectOne(`http://localhost:4444/api/npm-depency-retriever/`);
        const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
        expect(mockReq.request.method).toBe('POST');
        expect(mockReq.request.body).toEqual({ packageName: 'testPkg' });
        const noServerConnectionErrorResponse = {
          message: 'package not found!'
        };
        mockReq.flush(noServerConnectionErrorResponse, mockErrorResponse);
        expect(toastrService.error).toHaveBeenCalled();

      }));
    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    }));
  });
});
