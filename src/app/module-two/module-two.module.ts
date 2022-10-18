import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTwoComponent } from './module-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';



@NgModule({
  declarations: [
    ModuleTwoComponent,
    ComponentThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuleTwoComponent
  ]
})
export class ModuleTwoModule { }
