import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRegisterComponent } from './member-register.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { FormsModule } from '@angular/forms';
import { MemberHeaderComponent } from './member-header/member-header.component';
import { MemberCardviewComponent } from './member-cardview/member-cardview.component';



@NgModule({
  declarations: [
    MemberRegisterComponent,
    MemberFormComponent,
    MemberHeaderComponent,
    MemberCardviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MemberRegisterComponent
  ]
})
export class MemberRegisterModule { }
