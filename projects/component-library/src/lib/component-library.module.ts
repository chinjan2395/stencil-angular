import {NgModule} from '@angular/core';
import {ComponentLibraryComponent} from './component-library.component';
import {DIRECTIVES} from './stencil-generated';


@NgModule({
  declarations: [
    ComponentLibraryComponent,
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    ComponentLibraryComponent,
    ...DIRECTIVES
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentLibraryModule { }
