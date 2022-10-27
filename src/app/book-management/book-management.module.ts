import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookManagementService } from './book-management.service';
import {MatCardModule} from '@angular/material/card';
import { BookMoreDetailComponent } from './book-detail/book-more-detail/book-more-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookDetailComponent,
    BookCardComponent,
    BookMoreDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    BookManagementComponent
  ],
  providers: [BookManagementService]
})
export class BookManagementModule { }