import { TestBed } from '@angular/core/testing';

import { NpmDependencyManagerService } from './npm-dependency-manager.service';

describe('DependencyManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpmDependencyManagerService = TestBed.get(NpmDependencyManagerService);
    expect(service).toBeTruthy();
  });
});
