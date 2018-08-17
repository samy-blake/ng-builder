import { Component, OnInit } from '@angular/core';
import { Builder } from '../../../../projects/ng-builder/src/lib/builder.class';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent extends Builder implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
