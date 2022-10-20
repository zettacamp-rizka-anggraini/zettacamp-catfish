import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    ViewListComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserListComponent,
    ViewListComponent,
    AddUserComponent
  ]
})
export class UserListModule { }
