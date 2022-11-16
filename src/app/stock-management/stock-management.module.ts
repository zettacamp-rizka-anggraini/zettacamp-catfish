import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management.component';
import { RouterModule, Routes } from '@angular/router';
import { TableStockComponent } from './table-stock/table-stock.component';
import { MaterialModule } from '../material/material.module';
import { DialogStockComponent } from './dialog-stock/dialog-stock.component';

const routes : Routes = [
  {path:"", component:StockManagementComponent}
]

@NgModule({
  declarations: [
    StockManagementComponent,
    TableStockComponent,
    DialogStockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    StockManagementComponent,
    TableStockComponent
  ]
})
export class StockManagementModule { }
