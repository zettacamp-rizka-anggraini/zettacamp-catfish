import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuPageService {

  constructor(private apollo:Apollo) { }

  getAllMenuNow(pagination){
    return this.apollo.watchQuery({
      query: gql`
      query GetAllRecipes($page: Int, $limit: Int){
        getAllRecipes(page: $page, limit: $limit) {
          count_unpublish
          count_total
          count_publish
          count_deleted
          page
          max_page
          data_recipes {
            available
            id
            status
            recipe_name
            price
            description
            image
          }
        }
      }`,
      variables:{
        page: pagination.page,
        limit: pagination.limit
      },
      fetchPolicy:"network-only"
    });
  };

  getOneMenu(id:string):Observable<any>{
    return this.apollo.query({
      query:gql`
      query GetOneRecipes($getOneRecipesId: ID) {
        getOneRecipes(id: $getOneRecipesId) {
          available
          id
          ingredients {
            ingredient_id {
              id
              name
              stock
              status
            }
            stock_used
          }
          price
          recipe_name
          status
          description
          image
        }
      }`,
      variables:{
        getOneRecipesId : id
      }
    });
  };

  addCart(addMenu:any):Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
      mutation AddCart($menu: [trans_menuInput]) {
        addCart(menu: $menu) {
          id
          menu {
            note
            amount
            _id
            recipe_id {
              recipe_name
              price
              id
            }
          }
        }
      }`,
      variables: {
        menu: [addMenu]
      }
    })
  }
}
