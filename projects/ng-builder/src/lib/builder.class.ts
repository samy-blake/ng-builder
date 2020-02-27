import { Input, Output, EventEmitter } from '@angular/core';

export class Builder {
  @Input() data: any;
  @Input() edit: boolean;
  @Output() saveEdit = new EventEmitter();

  constructor() {}
}
