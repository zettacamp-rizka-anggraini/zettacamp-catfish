import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    PromoManagementComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PromoManagementComponent
  ]
})
export class PromoManagementModule { }
