import { Component, OnInit } from '@angular/core';
import { Builder } from '../../../../projects/ng-builder/src/lib/builder.class';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent extends Builder implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.data = {
      content: ''
    };
  }

}
