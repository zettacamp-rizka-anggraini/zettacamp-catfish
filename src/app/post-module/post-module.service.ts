import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostModuleService {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  
  // post = new BehaviorSubject<any>([]);
  // postData$ = this.post.asObservable();

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.ROOT_URL + '/posts');
  }
}
