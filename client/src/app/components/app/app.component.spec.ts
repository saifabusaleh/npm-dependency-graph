import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DependenciesTreeComponent } from '../npm-dependencies-tree/npm-dependencies-tree.component';
import { DependenciesInputComponent } from '../dependencies-input/dependencies-input.component';
import { TreeChartComponent } from '../tree-chart/tree-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

const ToastrStub = {
  error(msg): void { //
  }
};
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DependenciesTreeComponent,
        DependenciesInputComponent,
        TreeChartComponent
      ],
      providers: [
        {provide: ToastrService, useValue: ToastrStub}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dependency-graph-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Dependency Graph Project');
  });
});
