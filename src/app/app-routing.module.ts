import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoManagementComponent } from './promo-management/promo-management.component';
import { SchoolManagementComponent } from './school-management/school-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:'promo', component:PromoManagementComponent},
  {path:'school', component:SchoolManagementComponent},
  {path:'user', component:UserManagementComponent},
  {path:'', redirectTo:"promo", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
