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
      console.log(this.arrayDataBooks);
    })
  }
}

//jika ingin menginisialisasi atau mengambil data dari data json bisa langsung attach fetch useer json
//note untuk assign value pastikan jenis value apakah sebuah object atau array jika ada object dengan nama maka parameter.nameobject
//jika berupa array langsung assign parameter array nya
//contoh json array saja
/*[
    {
      "name": "Loneliness",
      "author": "Arvi Syarhin",
      "publisher": "Arvi and Ardi",
      "publish_date": "09/09/2022"
    },
    {
      "name": "Part To Me",
      "author": "Belle O Cornell",
      "publisher": "Comedia Tex",
      "publish_date": "09/09/2019"
    },
    {
      "name": "Dark in the west",
      "author": "alyawis",
      "publisher": "Dooorbell",
      "publish_date": "09/09/2018"
    }
  ] */
