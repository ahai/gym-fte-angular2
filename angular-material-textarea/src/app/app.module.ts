import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ErrorStateMatcher } from '@angular/material/core';

import { CustomErrorStateMatcher } from './custom-error-state-matcher';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
   // {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
