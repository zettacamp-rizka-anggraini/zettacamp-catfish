import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:"", component: MenuPageComponent}
]

@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MenuPageComponent
  ]
})
export class MenuPageModule { }
