import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NpmDependencyRetrieverService } from './npm-dependency-retriever.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Package } from 'src/app/types/Package';
import { ErrorCodes } from 'src/app/enums/errorCodes';

const ToastrStub = {
  error(msg): void { //
  }
};
describe('DependencyRetrieverService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NpmDependencyRetrieverService,
        { provide: ToastrService, useValue: ToastrStub }]
    });
  });

  it('should be created', () => {
    const depRetrieverservice: NpmDependencyRetrieverService = TestBed.get(NpmDependencyRetrieverService);
    expect(depRetrieverservice).toBeTruthy();
  });

  describe('getPackageLatestVersion', () => {
    const mockVersionsListResponse = () => {
      let dummyVersionsResponse = {};
      (dummyVersionsResponse as any).versions = {};
      (dummyVersionsResponse as any).versions['1.0'] = { 'name': 'val' };
      (dummyVersionsResponse as any).versions['1.5'] = { 'name': 'val1' };
      (dummyVersionsResponse as any).versions['2.0'] = { 'name': 'val2' };
      return dummyVersionsResponse;
    };

    it('should call the correct url and get the latest version', inject(
      [HttpTestingController, NpmDependencyRetrieverService],
      (httpMock: HttpTestingController, dataService: NpmDependencyRetrieverService) => {
        let dummyResponse = mockVersionsListResponse();

        dataService.getPackageLatestVersion('file-system').subscribe((pkgVersion: string) => {

          expect(pkgVersion).toBe('2.0');
        });
        const mockReq = httpMock.expectOne(`https://registry.npmjs.org/file-system`);
        expect(mockReq.request.method).toBe('GET');
        mockReq.flush(dummyResponse);
      }));

    it('should show toaster error when the package not found', inject(
      [HttpTestingController, NpmDependencyRetrieverService, ToastrService],
      (httpMock: HttpTestingController, dataService: NpmDependencyRetrieverService, toastrService: ToastrService) => {
        const pkgNotFoundServerResponse = { 'error': 'Not Found' };
        const clientErrorMsg = 'package file-system not found!';
        spyOn(toastrService, 'error');
        dataService.getPackageLatestVersion('file-system').subscribe((pkgVersion: string) => {
          expect(true).toBe(false); // we fail the test intentionally if the we reached here
        }, (error) => {
          expect(error).toEqual(clientErrorMsg);
        });
        const mockErrorResponse = { status: 404, statusText: 'OK' };
        const mockReq = httpMock.expectOne(`https://registry.npmjs.org/file-system`);

        mockReq.flush(pkgNotFoundServerResponse, mockErrorResponse);
        expect(toastrService.error).toHaveBeenCalledWith(clientErrorMsg, 'Error', Object({ timeOut: 200000 }));

      }));

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    }));
  });

  describe('getPackageDependecies', () => {
    const dummyResponse1 = {
      'dependencies': {
        'file-match': '1.0.1',
      }
    };
    const dummyResponse = {
      'dependencies': {
        'file-match': '^1.0.1',
        'utils-extend': '=2.0',
        'fs': '>5.0',
        'mocha': '~ 2.2.0',
        //       'baz': '>1.0.2 <=2.3.4'
      }
    };
    it('should call the correct url and get the dependencies', inject(
      [HttpTestingController, NpmDependencyRetrieverService],
      (httpMock: HttpTestingController, dataService: NpmDependencyRetrieverService) => {
        const pkg = new Package('testPkg', '1.0');
        dataService.getPackageDependecies(pkg).subscribe((pkgDeps: Package[]) => {
          expect(pkgDeps.length).toEqual(1);
          expect(pkgDeps[0].name).toEqual('file-match');
          expect(pkgDeps[0].version).toEqual('1.0.1');
        });
        const mockReq = httpMock.expectOne(`https://registry.npmjs.org/testPkg/1.0`);
        expect(mockReq.request.method).toBe('GET');
        mockReq.flush(dummyResponse1);
      }));

    it('should strip > = < ~ ^ from package dependencies versions', inject(
      [HttpTestingController, NpmDependencyRetrieverService],
      (httpMock: HttpTestingController, dataService: NpmDependencyRetrieverService) => {
        const pkg = new Package('testPkg', '1.0');
        dataService.getPackageDependecies(pkg).subscribe((pkgDeps: Package[]) => {
          Object.keys(dummyResponse.dependencies).forEach((pkgName: string, i) => {
            expect(pkgName).toEqual(pkgDeps[i].name);
          });
          expect(pkgDeps[0].version).toEqual('1.0.1');
          expect(pkgDeps[1].version).toEqual('2.0');
          expect(pkgDeps[2].version).toEqual('5.0');
          expect(pkgDeps[3].version).toEqual('2.2.0');

        });
        const mockReq = httpMock.expectOne(`https://registry.npmjs.org/testPkg/1.0`);
        expect(mockReq.request.method).toBe('GET');
        mockReq.flush(dummyResponse);
      }));

    it('should return empty deps with no error when the package dependencies is not found', inject(
      [HttpTestingController, NpmDependencyRetrieverService, ToastrService],
      (httpMock: HttpTestingController, dataService: NpmDependencyRetrieverService, toastrService: ToastrService) => {
        const pkg = new Package('testPkg', '1.0');
        spyOn(toastrService, 'error');
        dataService.getPackageDependecies(pkg).subscribe((pkgDeps: Package[]) => {
          expect(pkgDeps.length).toBe(0);

        }, () => {
          expect(true).toBe(false);
        });
        const mockReq = httpMock.expectOne(`https://registry.npmjs.org/testPkg/1.0`);
        const mockErrorResponse = { status: 404, statusText: 'OK' };
        expect(mockReq.request.method).toBe('GET');
        const pkgNotFoundServerResponse = {
          'code': ErrorCodes.METHOD_NOT_ALLOWED
        };
        mockReq.flush(pkgNotFoundServerResponse, mockErrorResponse);
      }));

    it('should show toaster error when there is request Timeout', inject(
      [HttpTestingController, NpmDependencyRetrieverService, ToastrService],
      (httpMock: HttpTestingController, dataService: NpmDependencyRetrieverService, toastrService: ToastrService) => {
        const pkg = new Package('testPkg', '1.0');
        spyOn(toastrService, 'error');
        dataService.getPackageDependecies(pkg).subscribe((pkgDeps: Package[]) => {

          expect(true).toBe(false);
        }, (err) => {
          expect(err).toContain('Error Code: 404');
        });
        const mockReq = httpMock.expectOne(`https://registry.npmjs.org/testPkg/1.0`);
        const mockErrorResponse = { status: 404, statusText: 'OK' };
        expect(mockReq.request.method).toBe('GET');
        const pkgNotFoundServerResponse = {
          'name': ErrorCodes.REQUEST_TIMEOUT
        };
        mockReq.flush(pkgNotFoundServerResponse, mockErrorResponse);
        const clientErrorMsg = 'package file-system not found!';
        expect(toastrService.error).toHaveBeenCalled();

      }));
  });

});
