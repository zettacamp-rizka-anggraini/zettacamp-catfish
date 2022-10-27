import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BookManagementService } from '../../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() arrayBooksCard:any;
  constructor(private serviceChooseBook: BookManagementService, private route:Router) { }

  ngOnInit(): void {
    
  }

  selectedBooks(books){
    // this.serviceChooseBook.selectedBookLatest(books);
    this.route.navigate(['/book-detail', books.id, books.name, books.author, books.publisher, books.publish_date, books.address, books.origin]);
    // console.log(books.id);
  }

}
