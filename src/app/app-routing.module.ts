import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPostComponent } from './post-module/form-post/form-post.component';
import { CardPostComponent } from './post-module/list-post/card-post/card-post.component';
import { ListPostComponent } from './post-module/list-post/list-post.component';
import { PostModuleComponent } from './post-module/post-module.component';

const routes: Routes = [
  {path:"post-module", component:PostModuleComponent},
  // {path:"post-list", component:ListPostComponent},
  // {path:"post-card", component:CardPostComponent},
  {path:"post-form-add", component:FormPostComponent},
  {path:"post-form/:id", component:FormPostComponent},
  {path:"", redirectTo:"post-module", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
