import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:"", component:StockManagementComponent}
]

@NgModule({
  declarations: [
    StockManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    StockManagementComponent
  ]
})
export class StockManagementModule { }
