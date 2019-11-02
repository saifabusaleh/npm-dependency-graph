import { AppComponent } from './components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';


import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeChartComponent } from './components/tree-chart/tree-chart.component';
import { DependenciesTreeComponent } from './components/npm-dependencies-tree/npm-dependencies-tree.component';
import { DependenciesInputComponent } from './components/dependencies-input/dependencies-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TreeChartComponent,
    DependenciesTreeComponent,
    DependenciesInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
