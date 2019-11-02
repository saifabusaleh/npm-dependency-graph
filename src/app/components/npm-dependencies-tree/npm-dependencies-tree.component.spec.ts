import { NpmDependencyRetrieverService } from './../../services/npm-dependency-retriever/npm-dependency-retriever.service';
import { NpmDependencyManagerService } from './../../services/npm-dependency-manager/npm-dependency-manager.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DependenciesTreeComponent } from './npm-dependencies-tree.component';
import { DependenciesInputComponent } from '../dependencies-input/dependencies-input.component';
import { TreeChartComponent } from '../tree-chart/tree-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { Package } from 'src/app/types/Package';
import { DependencyTree } from 'src/app/types/dependencyTree';

const ToastrStub = {
  error(msg): void { //
  }
};

const DepManagerStub = {
  getPackageDependencies(pkg): void { //
  }
};

const DepRetrieverStub = {
  getPackageLatestVersion(pkgName): void { //
  }
};

describe('DependenciesTreeComponent', () => {
  let component: DependenciesTreeComponent;
  let fixture: ComponentFixture<DependenciesTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MatInputModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [DependenciesTreeComponent,
        DependenciesInputComponent,
        TreeChartComponent],
      providers: [
        { provide: ToastrService, useValue: ToastrStub },
        { provide: NpmDependencyManagerService, useValue: DepManagerStub },
        { provide: NpmDependencyRetrieverService, useValue: DepRetrieverStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getPackageDependencies', () => {
    const createDummyDependencyTree = () => {
      let dummyDepTree = new DependencyTree();
      dummyDepTree.package = new Package('root', '1.0');
      dummyDepTree.dependencies = [];
      dummyDepTree.dependencies[0] = new DependencyTree();
      dummyDepTree.dependencies[0].package = new Package('a', '2.0');
      dummyDepTree.dependencies[0].dependencies = [];
      dummyDepTree.dependencies[1] = new DependencyTree();
      dummyDepTree.dependencies[1].package = new Package('b', '1.0');
      dummyDepTree.dependencies[1].dependencies = [];
      return dummyDepTree;
    };

    it('should call build tree after getting latest version and dependencies', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
      const depTree = createDummyDependencyTree();
      const pkgName: string = 'file-system';
      const pkgVersion: string = '2.0.1';
      spyOn(depRetriever, 'getPackageLatestVersion').and.returnValue(of(pkgVersion));
      spyOn(depManager, 'getPackageDependencies').and.returnValue(of(depTree));
      spyOn(component.treeChart, 'buildTree');
      component.getPackageDependencies(pkgName);
      const pkg: Package = new Package(pkgName, pkgVersion);
      expect(depManager.getPackageDependencies).toHaveBeenCalledWith(pkg);
      expect(component.treeChart.buildTree).toHaveBeenCalledWith(depTree);
    }));


    it('should not call build tree when failed to get package latest version', inject(
      [NpmDependencyManagerService, NpmDependencyRetrieverService],
      (depManager: NpmDependencyManagerService, depRetriever: NpmDependencyRetrieverService) => {
      const pkgName: string = 'file-system';
      spyOn(depRetriever, 'getPackageLatestVersion').and.returnValue(throwError('error'));
      spyOn(depManager, 'getPackageDependencies')
      spyOn(component.treeChart, 'buildTree');
      component.getPackageDependencies(pkgName);
      expect(depManager.getPackageDependencies).not.toHaveBeenCalled();
      expect(component.treeChart.buildTree).not.toHaveBeenCalled();
    }));
  });
});
