import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleOneComponent } from './module-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';



@NgModule({
  declarations: [
    ModuleOneComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModuleOneComponent
  ]
})
export class ModuleOneModule { }
