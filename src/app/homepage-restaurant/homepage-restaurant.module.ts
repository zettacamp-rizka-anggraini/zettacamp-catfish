import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRestaurantComponent } from './homepage-restaurant.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomepageRestaurantComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HomepageRestaurantComponent
  ]
})
export class HomepageRestaurantModule { }
