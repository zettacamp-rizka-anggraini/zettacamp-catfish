import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoFormComponent } from './promo-management/promo-form/promo-form.component';
import { PromoManagementComponent } from './promo-management/promo-management.component';
import { SchoolManagementComponent } from './school-management/school-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:'promo', component:PromoManagementComponent},
  {path:'school', component:SchoolManagementComponent},
  {path:'user', component:UserManagementComponent},
  {path:'create-promo', component:PromoFormComponent},
  {path:'', redirectTo:"promo", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
