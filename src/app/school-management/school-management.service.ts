import { Injectable } from '@angular/core';
import { Apollo,  gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolManagementService {

  constructor(private apollo: Apollo) { }

  getAllSchools(): Observable<any>{
    return this.apollo.query({
      query: gql`
      query{
        GetAllSchools(
          pagination: {limit: 20, page:0}
        ){
          _id
          short_name
          long_name
          status
        }
      }`
    });
  };
}
