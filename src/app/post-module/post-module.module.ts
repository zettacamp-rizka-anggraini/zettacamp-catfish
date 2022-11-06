import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModuleComponent } from './post-module.component';
import { ListPostComponent } from './list-post/list-post.component';
import { CardPostComponent } from './list-post/card-post/card-post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//angular material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    PostModuleComponent,
    ListPostComponent,
    CardPostComponent,
    FormPostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ListPostComponent,
    CardPostComponent,
    FormPostComponent
  ]
})
export class PostModuleModule { }
