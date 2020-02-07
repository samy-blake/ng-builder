import { Input, Output, EventEmitter, Directive } from '@angular/core';


@Directive()
export class Builder {
  @Input() data: any;
  @Input() edit: boolean;
  @Output() saveEdit = new EventEmitter();

  constructor() {}
}
