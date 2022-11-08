import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private apollo:Apollo) { }

  getAllUser(): Observable<any>{
    return this.apollo.query({
      query: gql`
      query{
        GetAllUsers(
          pagination: {limit:20, page: 0}
        ){ 
          _id
          first_name
          last_name
          civility
        }
      }`
    });
  };

  getFilteredUser(name:string): Observable<any>{
    return this.apollo.query({
      query: gql`
      query($name: String){
        GetAllUsers(
          last_name: $name,
          pagination: {limit:20, page: 0}
        ){ 
          _id
          first_name
          last_name
          civility
        }
      }`,
      variables: {
        name,
      }
    });
  }
}
