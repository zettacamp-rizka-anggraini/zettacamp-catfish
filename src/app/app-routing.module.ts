import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationPageComponent } from './user-management/user-creation-page/user-creation-page.component';
import { UserManagementComponent } from './user-management/user-management.component';


const routes: Routes = [
  {path:"user-management", component:UserManagementComponent},
  {path:"creation-page", component:UserCreationPageComponent},
  {path:"edit-page/:id", component:UserCreationPageComponent},
  {path:"", redirectTo:"user-management", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
