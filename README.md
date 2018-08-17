# ng-builder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.
The ng-builder is a module to dynamicly build components. This Tool wrapps the angular viewContainerRef. The Components are easy to develop and use with data.


## Use

```
npm install ng-builder --save
```

### add your Builder Components
1. Create a module where you import the component that you use for the ng builder
```typescript
@NgModule({
  imports: [
    CommonModule,
    FormsModule // <!-- requiered for ngModel in your components
  ],
  declarations: [
    ExampleOneComponent,
    // ...
  ],
  // this is very important!:
  entryComponents: [
    ExampleOneComponent,
    // ...
  ],
  exports: [
    ExampleOneComponent,
    // ...
  ]
})
```

2. Import your and the ng builder module into your right module

```typescript
@NgModule({
  declarations: [
    //...
  ],
  imports: [
    //...
    ComponentListModule, // <-- your component module
    NgBuilderModule // <-- the ng builder module
  ],
  providers: [
    //...
  ]
})
```

3. create your component, which used in ng builder

**component.ts**
```typescript
import { Builder } from 'ng-builder';
export class ExampleOneComponent extends Builder implements OnInit {
}
```

__extends Builder__ is for the requierd imputs and output.


| Name | Type | Description |
|------|------|-------------|
| data | Input | (any) This is the data for the component. Use attributes to seperate each data. |
| edit | Input | (boolean - **false**) Enable the edit mode |
| saveEdit| Output | This event fire when you hit the save button. Only enable when edit mode is activate |

**component.html**
```html
<div>
  <img [src]="data.src || ''" alt="">
  <input type="text" *ngIf="edit" [(ngModel)]="data.src">
</div>

<!-- This is the Edit Part -->
<div *ngIf="edit">
  <button (click)="saveEdit.emit(data)">
    save
  </button>
</div>
```
4. create Service to declare your builder components
```typescript
export class ComponentListService {
  private componentList = [
    {
      component: ExampleOneComponent,
      displayName: 'Example One'
    },
    //...
  ];

  constructor() { }

  getComponentList() {
    return this.componentList;
  }
}

```

5. Use the ng-builder component
**app.component.ts**
```typescript
import { ViewChild } from '@angular/core';
import { NgBuilderComponent } from 'ng-builder';
```

```typescript
@ViewChild(NgBuilderComponent) ngBuilder: NgBuilderComponent;

constructor(
  private componentList: ComponentListService
) {}

ngOnInit()  {
  this.cList = this.componentList.getComponentList();
}

selectComponent(component) {
  // to use the the builde with content in the component:

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
```

**app.component.html**
```html
<lib-ng-builder 
  [componentList]="ngBuilderComponentList"
  (saveComponent)="saveComponent($event)">
</lib-ng-builder>
```

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| componentList | BuilderComponent | { component: any; edit: boolean; data?: any; } |
| saveComponent | EventErmitter | Fire when the build component fire his saveEdit Event |


## Dev
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
