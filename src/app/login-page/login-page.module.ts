import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path:"", component:LoginPageComponent}
]
@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
