import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PromoManagementService {

  constructor(private apollo: Apollo) { }

  getAllPromos(){
    return this.apollo.query({
      query: gql`
      query{
        GetAllPromos{
          _id
          image_url
          title
          sub_title
          ref
          description
        }
      } `
    });
  };
}
