import { Package } from 'src/app/types/package';
import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dependencies-input',
  templateUrl: './dependencies-input.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dependencies-input.component.scss']
})
export class DependenciesInputComponent implements OnInit {

  public readonly fieldIsRequiredMsg: string = 'Field is required.';
  public readonly packageNameMsg: string = 'Package Name';

  public getPkgDependenciesMsg: string = 'Get Dependencies';
  @Output() onSubmitEvent = new EventEmitter<Package>();
  InputsForm = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    //
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.InputsForm = this.formBuilder.group({
      packageName: new FormControl(undefined, Validators.required)
    });
  }

  public onGetPackageDependenciesClick() {
    this.InputsForm.get('packageName').markAsTouched();
    if (this.InputsForm.get('packageName').valid) {
      let pkgName = this.InputsForm.get('packageName').value;
      this.onSubmitEvent.emit(pkgName);
    }

  }

}
