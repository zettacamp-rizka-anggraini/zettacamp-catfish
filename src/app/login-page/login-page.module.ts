import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
