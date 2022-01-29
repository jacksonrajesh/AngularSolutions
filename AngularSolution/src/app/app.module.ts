import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LowerCaseUrlSerializer } from './lowe-case-url-serializer';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Validation } from './validation';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [  {
    provide: UrlSerializer,
    useClass: LowerCaseUrlSerializer
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
