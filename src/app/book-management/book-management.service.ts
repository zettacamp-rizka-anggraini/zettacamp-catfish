import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {
  private bookLending = new BehaviorSubject<[]>([]);
  dataLending$ = this.bookLending.asObservable();

  private bookSelected = new BehaviorSubject<{}>(null);
  dataSelected$ = this.bookSelected.asObservable();
  
  constructor(private httpClient: HttpClient) {
    // this.dummyInitList(); //hanya digunakan untuk menginisialisasi data kosong
  }

  // dummyInitList(){
  //   this.fetchUserJson().subscribe(x =>
  //     {
  //       this.bookLending.next(x.books);
  //     })
  // }

  fetchUserJson(){
    return this.httpClient.get<any>('assets/json/books.json');
  }

  selectedBookLatest(bookChoose: {}){
    this.bookSelected.next(bookChoose);
  }

  resetSelectedBook(){
    this.bookSelected.next(null);
  }
}