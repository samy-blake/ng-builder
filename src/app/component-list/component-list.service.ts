import { Injectable } from '@angular/core';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentListService {
  private componentList = [
    {
      component: ExampleOneComponent,
      displayName: 'Example One'
    },
    {
      component: ExampleTwoComponent,
      displayName: 'Example Two'
    }
  ];

  constructor() { }

  getComponentList() {
    return this.componentList;
  }
}
