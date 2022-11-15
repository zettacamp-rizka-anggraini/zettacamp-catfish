import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageRestaurantService {

  constructor(private apollo:Apollo) { }

  getAllUser(email:string):Observable<any>{
    return this.apollo.query({
      query: gql`
      query($email: String){
        getAllUser(email: $email){
          data {
            role
          }
        }
      }`,
      variables:{
        email
      }
    })
  }
}
