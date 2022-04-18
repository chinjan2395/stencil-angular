import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ComponentLibraryComponent} from './component-library.component';
import {MyComponent} from './stencil-generated/components';


@NgModule({
  declarations: [
    ComponentLibraryComponent,
    MyComponent
  ],
  imports: [
  ],
  exports: [
    ComponentLibraryComponent,
    MyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentLibraryModule { }
