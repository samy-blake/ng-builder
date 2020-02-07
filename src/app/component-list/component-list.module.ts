import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  exports: [
    ExampleOneComponent,
    ExampleTwoComponent
  ]
})
export class ComponentListModule { }
