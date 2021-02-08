import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input, Output, EventEmitter, ViewContainerRef, AfterContentInit } from '@angular/core';
import { NgBuilderDirective } from './ng-builder.directive';
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

  @ViewChild(NgBuilderDirective, { static: true }) builder: NgBuilderDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.viewContainerRef = this.builder.viewContainerRef;
    this.renderdComonentList = [];
    if(this.componentList && this.componentList.length > 0) {
      this.update();
    }
  }

  /**
   * deprecated
   */
  public generateComponentList() {
    this.update();
  }

  /**
   * update rendert component list
   */
  public update() {
    /**
     * Add components
     */
    for (const key in this.componentList) {
      this.loadComponent(this.componentList[key], key);
    }

    /**
     * Remove Components
     */
    for (let i = (this.renderdComonentList.length - 1); i >= 0; i--) {
      if(!this.componentList.includes(this.renderdComonentList[i])) {
        if(this.viewContainerRef.get(i)) {
          this.viewContainerRef.remove(i);
        }
        this.renderdComonentList.splice(i, 1);
      }
    }
  }

  clearComponentList() {
    this.viewContainerRef.clear();
    this.renderdComonentList = [];
  }

  private loadComponent(component, index) {
    if (this.renderdComonentList.includes(component)) {
      const oldComponentIndex = this.renderdComonentList.indexOf(component);
      if(index === oldComponentIndex) {
        return;
      }
      this.viewContainerRef.remove(oldComponentIndex);
      this.renderdComonentList.splice(oldComponentIndex, 1);
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);

    const componentRef = this.viewContainerRef.createComponent(componentFactory, index);
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
    // this.renderdComonentList.push(component);
    this.renderdComonentList.splice(index, 0, component);
  }

}
