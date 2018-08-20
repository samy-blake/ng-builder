import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { NgBuilderDirective } from './ng-builder.directive';
import { NgBuilderService } from './ng-builder.service';
import { BuilderComponent } from './builder-component';

@Component({
  selector: 'lib-ng-builder',
  template: `
    <ng-template libBuilder>
    </ng-template>
  `,
  styles: []
})
export class NgBuilderComponent implements OnInit {

  private viewContainerRef: ViewContainerRef;
  private renderdComonentList: BuilderComponent[];

  private componentList: BuilderComponent[];
  @Input('componentList')
  set _componentList(value: BuilderComponent[]) {
    if (value) {
      this.componentList = value;
    }
  }


  @Output() saveComponent = new EventEmitter();

  @ViewChild(NgBuilderDirective) builder: NgBuilderDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.viewContainerRef = this.builder.viewContainerRef;
    this.renderdComonentList = [];
    if(this.componentList && this.componentList.length > 0) {
      this.generateComponentList();
    }
  }

  generateComponentList() {

    for (const key in this.componentList) {
      if (
        this.renderdComonentList.includes(this.componentList[key])
      ) {
        continue;
      }
      const component = this.componentList[key];
      this.loadComponent(component, key);
    }
  }

  private loadComponent(component, index) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);

    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const componentInstance = (<any>componentRef.instance);

    if (component.data) {
      componentInstance.data = component.data;
    }

    componentInstance.edit = component.edit;
    componentInstance.saveEdit.subscribe(data => {
      this.saveComponent.emit({
        index: index,
        component: component,
        data: data
      });
    });
    this.renderdComonentList.push(component);
  }

}
