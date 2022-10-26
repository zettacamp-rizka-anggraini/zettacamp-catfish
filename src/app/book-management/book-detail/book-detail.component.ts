import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookSelected: any;
  constructor(private serviceSelected: BookManagementService) { }

  ngOnInit(): void {
    this.serviceSelected.dataSelected$.subscribe(dataSelected => {
      this.bookSelected = dataSelected;
    })
  }

  closeDataBooks(){
    this.serviceSelected.resetSelectedBook();
  }
}
