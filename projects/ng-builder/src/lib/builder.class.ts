import { Input, Output, EventEmitter, OnInit } from '@angular/core';


export class Builder implements OnInit {
  @Input() data: any;
  @Input() edit: boolean;
  @Output() saveEdit = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.data  = {};
    this.edit = false;
  }
}
