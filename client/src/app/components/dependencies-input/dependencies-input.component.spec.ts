import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciesInputComponent } from './dependencies-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DependenciesInputComponent', () => {
  let component: DependenciesInputComponent;
  let fixture: ComponentFixture<DependenciesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      declarations: [DependenciesInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onGetPackageDependenciesClick', () => {
    it('should emit according to packageName control value', () => {
      const pkgNameInputValue = 'file-system';
      component.InputsForm.controls.packageName.setValue(pkgNameInputValue);
      spyOn(component.submitEvent, 'emit');
      component.onGetPackageDependencies();
      expect(component.submitEvent.emit).toHaveBeenCalledWith(pkgNameInputValue);
    });

    it('should not emit when the control is not valid ', () => {
      component.InputsForm.controls.packageName.setValue(undefined);
      spyOn(component.submitEvent, 'emit');
      component.onGetPackageDependencies();
      expect(component.submitEvent.emit).not.toHaveBeenCalled();
    });
  });
});
