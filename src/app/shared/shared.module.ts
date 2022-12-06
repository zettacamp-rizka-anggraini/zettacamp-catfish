import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddedSnackBarComponent } from './added-snack-bar/added-snack-bar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AddedSnackBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AddedSnackBarComponent
  ]
})
export class SharedModule { }
