import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRestaurantComponent } from './homepage-restaurant.component';
import { MaterialModule } from '../material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomepageRestaurantComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  exports:[
    HomepageRestaurantComponent,
    LandingPageComponent
  ]
})
export class HomepageRestaurantModule { }
