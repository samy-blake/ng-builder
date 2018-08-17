import { Input, Output, EventEmitter } from '@angular/core';


export class Builder {
  @Input() data: any = {};
  @Input() edit = false;
  @Output() saveEdit = new EventEmitter();

  constructor() {}
}
