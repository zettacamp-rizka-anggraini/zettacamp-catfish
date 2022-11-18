import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockManagementService {

  constructor(private apollo:Apollo) { }

  getAllStock(){
    return this.apollo.watchQuery({
      query:gql`
      query GetAllIngredients{
        getAllIngredients(page: 1, limit: 100, stock: 1) {
          id
          name
          stock
          status
        }
      }`
    });
  };

  getOneStock(id:any):Observable<any>{
    // console.log(id);
    return this.apollo.query({
      query: gql`
      query GetOneIngredients($getOneIngredientsId: ID){
        getOneIngredients(id: $getOneIngredientsId) {
          id
          name
          stock
          status
        }
      }`,
      variables:{
        getOneIngredientsId : id
      }
    });
  };

  createNewStock(name:string, stock:number):Observable<any>{
    console.log(name, stock);
    return this.apollo.mutate({
      mutation: gql`
      mutation CreateIngredints($name: String, $stock: Int) {
        CreateIngredints(name: $name, stock: $stock) {
          id
          name
          status
          stock
        }
      }`,
      variables:{
        name : name,
        stock : stock
      }
    });
  };

  updateStock(id:string, name:string, stock:number):Observable<any>{
    // console.log(id, stock);
    return this.apollo.mutate({
      mutation: gql`
      mutation UpdateIngredients($updateIngredientsId: ID, $name: String, $stock: Int) {
        UpdateIngredients(id: $updateIngredientsId, name: $name, stock: $stock) {
          id
          name
          stock
          status
        }
      }`,
      variables:{
        updateIngredientsId: id,
        name: name, 
        stock: stock
      }
    });
  };

  //delete belum jadi
  deleteStock(id:string):Observable<any>{
    // console.log(id);
    return this.apollo.mutate({
      mutation: gql`
      mutation DeleteIngredients($deleteIngredientsId: ID) {
        DeleteIngredients(id: $deleteIngredientsId) {
          id
          name
          status
          stock
        }
      }`,
      variables:{
        deleteIngredientsId : id
      }
    });
  };
}
