import { Package } from 'src/app/types/package';
import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-dependencies-input',
  templateUrl: './dependencies-input.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dependencies-input.component.scss']
})
export class DependenciesInputComponent implements OnInit {

  public readonly fieldIsRequiredMsg: string = 'Field is required.';
  public readonly packageNameMsg: string = 'Package Name';

  public getPkgDependenciesMsg = 'Get Dependencies';
  @Output() submitEvent = new EventEmitter<string>();
  InputsForm = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    //
  }

  ngOnInit() {
    this.createForm();
    this.updateSearchInputFromSearchParam();
  }

  private createForm() {
    this.InputsForm = this.formBuilder.group({
      packageName: new FormControl(undefined, Validators.required)
    });
  }

  private updateSearchInputFromSearchParam() {
    this.route.queryParams.pipe(
      // take the search term from the query string
      map(query => query.q || ''),

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged()).subscribe((pkgName: string) => {
        this.InputsForm.patchValue({
          packageName: pkgName
        });
      });
  }



  public onGetPackageDependencies() {
    this.InputsForm.get('packageName').markAsTouched();
    if (this.InputsForm.get('packageName').valid) {
      const pkgName = this.InputsForm.get('packageName').value;
      this.submitEvent.emit(pkgName);
    }
  }

  onTextInput(term: string): void {
    this.router.navigate([], { queryParams: { q: term } });
  }
}
