import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentListService } from './component-list/component-list.service';
import { NgBuilderComponent } from 'projects/ng-builder/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'builder';
  cList: any[] = [];

  ngBuilderComponentList = [];

  @ViewChild(NgBuilderComponent, { static: true }) ngBuilder: NgBuilderComponent;

  constructor(
    private componentList: ComponentListService
  ) {}

  ngOnInit()  {
    this.cList = this.componentList.getComponentList();
  }

  selectComponent(component) {
    // this.ngBuilderComponentList.push({
    //   edit: false,
    //   data: {
    //     content: 'asdasd'
    //   },
    //   component: component
    // });

    this.ngBuilderComponentList.push({
      edit: true,
      component: component
    });

    this.ngBuilder.generateComponentList();
  }

  saveComponent(data) {
    console.log(data);
  }

}
