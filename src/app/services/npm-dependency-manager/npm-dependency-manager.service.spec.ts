import { TestBed } from '@angular/core/testing';

import { NpmDependencyManagerService } from './npm-dependency-manager.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';

const ToastrStub = {
  error(msg): void { //
  }
};

describe('DependencyManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [{ provide: ToastrService, useValue: ToastrStub }]
  }));

  it('should be created', () => {
    const service: NpmDependencyManagerService = TestBed.get(NpmDependencyManagerService);
    expect(service).toBeTruthy();
  });
});
