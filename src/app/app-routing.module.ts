import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:"user-list", component:UserListComponent},
  {path:"user-management", component:UserManagementComponent},
  {path:"", redirectTo:"user-list", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
