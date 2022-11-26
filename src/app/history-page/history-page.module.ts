import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPageComponent } from './history-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DetailHistoryComponent } from './detail-history/detail-history.component';

const routes : Routes = [
  {path:"", component: HistoryPageComponent}
]

@NgModule({
  declarations: [
    HistoryPageComponent,
    DetailHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    HistoryPageComponent
  ]
})
export class HistoryPageModule { }
