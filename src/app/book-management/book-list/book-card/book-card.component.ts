import { Component, Input, OnInit } from '@angular/core';
import { BookManagementService } from '../../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() arrayBooksCard:any;
  constructor(private serviceChooseBook: BookManagementService) { }

  ngOnInit(): void {
  }

  selectedBooks(books){
    this.serviceChooseBook.selectedBookLatest(books);
  }

}
