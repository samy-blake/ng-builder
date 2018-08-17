import { NgModule } from '@angular/core';
import { NgBuilderComponent } from './ng-builder.component';
import { NgBuilderDirective } from './ng-builder.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    NgBuilderComponent,
    NgBuilderDirective
  ],
  exports: [
    NgBuilderComponent
  ]
})
export class NgBuilderModule { }
