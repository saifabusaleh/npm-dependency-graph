import { HttpService } from '../../services/http-service/http.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DependenciesTreeComponent } from './npm-dependencies-tree.component';
import { DependenciesInputComponent } from '../dependencies-input/dependencies-input.component';
import { TreeChartComponent } from '../tree-chart/tree-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwError, of } from 'rxjs';
import { Package } from 'src/app/types/Package';
import { DependencyTree } from 'src/app/types/dependencyTree';

const ToastrStub = {
  error(msg): void { //
  }
};

const HttpServiceStub = {
  getPackageDependecies(pkg): void { //
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
        { provide: HttpService, useValue: HttpServiceStub }
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

    it('should call build tree after getting package dependencies', inject(
      [HttpService],
      (httpService: HttpService) => {
        const depTree = createDummyDependencyTree();
        const pkgName: string = 'file-system';
        spyOn(component.treeChartComponent, 'buildTree');
        spyOn(httpService, 'getPackageDependecies').and.returnValue(of(depTree));
        component.getPackageDependencies(pkgName);
        expect(httpService.getPackageDependecies).toHaveBeenCalledWith(pkgName);
        expect(component.treeChartComponent.buildTree).toHaveBeenCalledWith(depTree);
      }));


    it('should not call build tree when failed to get package', inject(
      [HttpService],
      (httpService: HttpService) => {
        const pkgName: string = 'file-system';
        spyOn(httpService, 'getPackageDependecies').and.returnValue(throwError('error'));
        spyOn(component.treeChartComponent, 'buildTree');
        component.getPackageDependencies(pkgName);
        expect(component.treeChartComponent.buildTree).not.toHaveBeenCalled();
      }));
  });
});
