import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRestaurantComponent } from './homepage-restaurant.component';
import { MaterialModule } from '../material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    HomepageRestaurantComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HomepageRestaurantComponent,
    LandingPageComponent
  ]
})
export class HomepageRestaurantModule { }
