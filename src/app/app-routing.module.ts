import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-management/book-detail/book-detail.component';
import { BookMoreDetailComponent } from './book-management/book-detail/book-more-detail/book-more-detail.component';
import { BookCardComponent } from './book-management/book-list/book-card/book-card.component';
import { BookListComponent } from './book-management/book-list/book-list.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { PageNotFoundComponent } from './book-management/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"", redirectTo:"book-list", pathMatch:'full'},
  {path:"book-list", component: BookListComponent, 
    children:[
      {path:":id/:name/:author/:publisher/:publish_date/:address/:origin", component:BookCardComponent},
    ]},
  {path:"book-detail/:id/:name/:author/:publisher/:publish_date/:address/:origin", component: BookDetailComponent, children:[
    {path:":id", component:BookMoreDetailComponent},
  ]},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
