import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { DialogDetailMenuComponent } from './dialog-detail-menu/dialog-detail-menu.component';

const routes : Routes = [
  {path:"", component: MenuPageComponent}
]

@NgModule({
  declarations: [
    MenuPageComponent,
    ListMenuComponent,
    DialogDetailMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MenuPageComponent,
    ListMenuComponent,
    DialogDetailMenuComponent
  ]
})
export class MenuPageModule { }
