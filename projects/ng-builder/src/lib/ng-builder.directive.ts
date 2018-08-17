import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libBuilder]'
})
export class NgBuilderDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
