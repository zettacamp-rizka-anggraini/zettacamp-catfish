import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModuleComponent } from './post-module.component';
import { ListPostComponent } from './list-post/list-post.component';
import { CardPostComponent } from './list-post/card-post/card-post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { HttpClientModule } from '@angular/common/http';

//angular material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



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
    MatButtonModule
  ],
  exports:[
    ListPostComponent,
    CardPostComponent,
    FormPostComponent
  ]
})
export class PostModuleModule { }
