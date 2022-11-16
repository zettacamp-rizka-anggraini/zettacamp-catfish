import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomepageRestaurantComponent } from './homepage-restaurant/homepage-restaurant.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { StockManagementComponent } from './stock-management/stock-management.component';

// const routes: Routes = [
//   {path:"home-page", component:HomepageRestaurantComponent},
//   {path:"user-page", component:HomepageRestaurantComponent, children:[
//     {path:"", redirectTo:"menu-page", pathMatch:"full"},
//     {path:"menu-page", component:MenuPageComponent},
//     {path:"cart-page", component:CartPageComponent}
//   ]},
//   {path:"admin-page", component:HomepageRestaurantComponent, children:[
//     {path:"", redirectTo:"stock-management", pathMatch:"full"},
//     {path:"stock-management", component:StockManagementComponent},
//     {path:"menu-management", component:MenuManagementComponent}
//   ]},
//   {path:"login-page", component:LoginPageComponent},
//   {path:"", redirectTo:"home-page", pathMatch:"full"}
// ];

const routes: Routes = [
  {path:"", redirectTo:"home-page", pathMatch:"full"},
  {path:"home-page", component:HomepageRestaurantComponent},
  {
    path:"user-page",
    component:HomepageRestaurantComponent,
    children:[
      {path:"", redirectTo:"menu-page", pathMatch:"full"},
      {path:"menu-page", loadChildren:()=>import("./menu-page/menu-page.module").then(m=>m.MenuPageModule)},
      {path:"cart-page", loadChildren:()=>import("./cart-page/cart-page.module").then(m=>m.CartPageModule)}
    ]
  },
  {
    path:"admin-page",
    component:HomepageRestaurantComponent,
    children:[
      {path:"", redirectTo:"stock-management", pathMatch:"full"},
      {path:"menu-page", loadChildren:()=>import("./menu-page/menu-page.module").then(m=>m.MenuPageModule)},
      {path:"stock-management", loadChildren:()=>import("./stock-management/stock-management.module").then(m=>m.StockManagementModule)},
      {path:"menu-management", loadChildren:()=>import("./menu-management/menu-management.module").then(m=>m.MenuManagementModule)}
    ]
  },
  {path:"login-page", loadChildren:() => import("./login-page/login-page.module").then(m=>m.LoginPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
