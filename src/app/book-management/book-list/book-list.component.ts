import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  arrayDataBooks:any;
  constructor(private bookService: BookManagementService) { }

  ngOnInit(): void {
    this.bookService.fetchUserJson().subscribe(books => {
      this.arrayDataBooks = books.books;
      // console.log(this.arrayDataBooks);
    })
  }
}