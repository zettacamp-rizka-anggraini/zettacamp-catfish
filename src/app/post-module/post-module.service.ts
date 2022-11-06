import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class PostModuleService {
  private readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/';
  
  // post = new BehaviorSubject<any>([]);
  // postData$ = this.post.asObservable();

  constructor(private http: HttpClient) { }

  getData(): Observable<Post[]>{
    return this.http.get<Post[]>(this.ROOT_URL + 'posts');
  }

  updateData(id:number, params: {title: string, body:string}): Observable<Post>{
    const url = this.ROOT_URL + 'posts/' + id[0].id;
    const body = JSON.stringify(params);
    const headers = new HttpHeaders().set('Content-type', ['application/json', 'charset=UTF-8']);
    console.log(id[0].id);
    return this.http.patch<Post>(url, body, {headers});
  }

  addData(data:any){
    const url = this.ROOT_URL + 'posts';
    return this.http.post<Post[]>(url, data);
  }

  deleteData(id:number){
    const url = this.ROOT_URL + 'posts/' + id;
    return this.http.delete<Post>(url);
  }
}
