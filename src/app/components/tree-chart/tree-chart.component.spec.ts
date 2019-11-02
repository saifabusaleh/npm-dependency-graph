import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeChartComponent } from './tree-chart.component';

describe('TreeChartComponent', () => {
  let component: TreeChartComponent;
  let fixture: ComponentFixture<TreeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
