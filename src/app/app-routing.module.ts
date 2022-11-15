import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageRestaurantComponent } from './homepage-restaurant/homepage-restaurant.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:"home-page", component:HomepageRestaurantComponent},
  {path:"login-page", component:LoginPageComponent},
  {path:"", redirectTo:"home-page", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
