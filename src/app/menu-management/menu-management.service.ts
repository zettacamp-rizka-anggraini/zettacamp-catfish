import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {

  constructor(private apollo:Apollo) { }

  getAllStock():Observable<any>{
    return this.apollo.query({
      query:gql`
      query GetAllIngredients{
        getAllIngredients(page: 1, limit: 100, stock: 1) {
          id
          name
        }
      }`
    });
  };

  getAllMenu(){
    return this.apollo.watchQuery({
      query: gql`
      query GetAllRecipes{
        getAllRecipes(page: 1, limit: 100) {
          count
          data {
            available
            id
            status
            recipe_name
            price
          }
          max_page
          page
        }
      }`
    });
  }

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
        }
      }`,
      variables:{
        getOneRecipesId : id
      }
    });
  };

  createNewMenu(name:string, ingredients:[], status: string, price:number){
    return this.apollo.mutate({
      mutation: gql`
      mutation CreateRecipes($recipeName: String, $ingredients: [ingredientidinput], $status: status_recipe, $price: Int) {
        CreateRecipes(recipe_name: $recipeName, ingredients: $ingredients, status: $status, price: $price) {
          available
          id
          ingredients {
            ingredient_id {
              status
              name
              id
              stock
            }
            stock_used
          }
          price
          recipe_name
          status
        }
      }`,
      variables:{
        recipeName:name,
        ingredients:ingredients,
        status:status,
        price:price
      }
    });
  };

  updateMenu(id:string, name:string, ingredients:[], status: string, price:number):Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
      mutation UpdateRecipe($updateRecipeId: ID, $status: status_recipe, $recipeName: String, $ingredients: [ingredientidinput], $price: Int) {
        UpdateRecipe(id: $updateRecipeId, status: $status, recipe_name: $recipeName, ingredients: $ingredients, price: $price) {
          id
          status
          available
          ingredients {
            ingredient_id {
              id
              name
              status
              stock
            }
            stock_used
          }
          price
          recipe_name
        }
      }`,
      variables:{
        updateRecipeId:id,
        recipeName:name,
        ingredients:ingredients,
        status:status,
        price:price
      }
    })
  }

  updateStatusMenu(id:string, status:string):Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
      mutation UpdateRecipe($updateRecipeId: ID, $status: status_recipe) {
        UpdateRecipe(id: $updateRecipeId, status: $status) {
          id
          status
        }
      }`,
      variables: {
        updateRecipeId: id,
        status: status
      }
    });
  }
}
