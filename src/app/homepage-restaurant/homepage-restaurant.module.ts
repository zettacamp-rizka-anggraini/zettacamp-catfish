import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRestaurantComponent } from './homepage-restaurant.component';
import { MaterialModule } from '../material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { MenuHiglightComponent } from './menu-higlight/menu-higlight.component';

@NgModule({
  declarations: [
    HomepageRestaurantComponent,
    LandingPageComponent,
    MenuHiglightComponent
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
    LandingPageComponent,
    MenuHiglightComponent
  ]
})
export class HomepageRestaurantModule { }
