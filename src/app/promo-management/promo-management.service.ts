import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PromoManagementService {

  constructor(private apollo: Apollo) { }

  getAllPromos(promoget){
    console.log(promoget);
    return this.apollo.query({
      query: gql`
      query($promoget: PaginationInput){
        GetAllPromos(pagination: $promoget){
          _id
          title
          sub_title
          description
        }
      } `,
      fetchPolicy: 'network-only',
      variables: {
        promoget
      }
    });
  };

  getAllPromo(){
    return this.apollo.query({
      query: gql`
      query{
        GetAllPromos(pagination: {limit: 10, page:0}){
          _id
          title
          sub_title
          description
        }
      }`
    })
  }

  createNewPromo(promo){
    return this.apollo.mutate({
      mutation: gql`
      mutation($promo: PromoInput){
        CreatePromo(promo_input: $promo){
          _id
        }
      }`,
      variables: {
        promo
      }
    });
  };

  // createNewPromo(ref:string, title:string, subtitle:string, description:string){
  //   console.log(ref, title, subtitle, description);
  // }
}
