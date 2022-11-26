import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageRestaurantService {

  constructor(private apollo:Apollo) { }

  getMenuHighlight(pagination:any, highlight:boolean){
    return this.apollo.watchQuery({
      query: gql`
      query GetAllRecipesNoToken($menuHighlight: Boolean, $limit: Int, $page: Int) {
        getAllRecipesNoToken(menu_highlight: $menuHighlight, limit: $limit, page: $page) {
          data_recipes {
            recipe_name
            menu_highlight
            image
            description
            Special_offers
            available
            price
            status
            id
          }
          count_publish
          count_unpublish
          count_total
          count_deleted
        }
      }`,
      variables:{
        menuHighlight: highlight, 
        limit: pagination.limit, 
        page: pagination.page
      }
    })
  }
  
}
