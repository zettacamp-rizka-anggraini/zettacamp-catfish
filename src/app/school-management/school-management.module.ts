import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolManagementComponent } from './school-management.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    SchoolManagementComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    SchoolManagementComponent
  ]
})
export class SchoolManagementModule { }
