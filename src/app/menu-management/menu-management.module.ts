import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagementComponent } from './menu-management.component';
import { RouterModule, Routes } from '@angular/router';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { DialogMenuComponent } from './dialog-menu/dialog-menu.component';
import { MaterialModule } from '../material/material.module';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';

const routes : Routes = [
  {path:"", component:MenuManagementComponent}
]

@NgModule({
  declarations: [
    MenuManagementComponent,
    TableMenuComponent,
    DialogMenuComponent,
    DetailMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MenuManagementComponent,
    TableMenuComponent,
    DialogMenuComponent
  ]
})
export class MenuManagementModule { }
