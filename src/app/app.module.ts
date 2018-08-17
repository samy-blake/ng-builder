import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentListModule } from './component-list/component-list.module';
import { NgBuilderModule } from 'projects/ng-builder/src/public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentListModule,
    NgBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
