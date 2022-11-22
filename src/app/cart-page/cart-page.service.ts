import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPageService {

  constructor(private apollo:Apollo) { }

  getAllCart(pagination:any){
    return this.apollo.watchQuery({
      query: gql`
      query GetAllTransaction($page: Int, $limit: Int) {
        getAllTransaction(page: $page, limit: $limit) {
          count_failed
          count_pending
          count_success
          count_total
          data_transaction {
            id
            menu {
              recipe_id {
                available
                description
                id
                image
                price
                recipe_name
                status
              }
              note
              amount
              _id
            }
            status
            order_status
            order_date
        total
          }
        }
      }`,
      variables: {
        page: pagination.page,
        limit: pagination.limit
      },
      fetchPolicy:'network-only'
    })
  }

  getAllCartStatus(pagination:any, order_status:any){
    return this.apollo.watchQuery({
      query: gql`
      query GetAllTransaction($page: Int, $limit: Int, $orderStatus: oder_status) {
        getAllTransaction(page: $page, limit: $limit, order_status: $orderStatus) {
          count_failed
          count_pending
          count_success
          count_total
          data_transaction {
            id
            menu {
              recipe_id {
                available
                description
                id
                image
                price
                recipe_name
                status
              }
              note
              amount
              _id
            }
            status
            order_status
            order_date
            total
          }
        }
      }`,
      variables: {
        page: pagination.page,
        limit: pagination.limit,
        orderStatus: order_status
      },
      fetchPolicy:'network-only'
    })
  }
  
  getOneCart(id:string):Observable<any>{
    return this.apollo.query({
      query: gql`
      query GetOneTransaction($getOneTransactionId: ID) {
        getOneTransaction(id: $getOneTransactionId) {
          id
          menu {
            note
            amount
            _id
            recipe_id {
              recipe_name
            }
          }
        }
      }`,
      variables:{
        getOneTransactionId:id
      }
    })
  }

  updateCart(id:string, note:any):Observable<any>{
    return this.apollo.mutate({
      mutation:gql`
      mutation UpdateCart($updateCartId: ID, $note: String) {
        UpdateCart(id: $updateCartId, note: $note) {
          id
          order_date
          order_status
          status
          total
          menu {
            note
            amount
            _id
          }
        }
      }`,
      variables: {
        updateCartId: id,
        note: note
      }
    })
  }

  updateAmountPlus(id:string):Observable<any>{
    return this.apollo.mutate({
      mutation:gql`
      mutation IncrAmaount($menuId: ID, $amount: Int) {
        incrAmaount(menu_id: $menuId, amount: $amount) {
          id
          total
          order_status
          order_date
          status
        }
      }`,
      variables:{
        menuId: id,
        amount: 1
      }
    })
  }

  updateAmountMinus(id:string):Observable<any>{
    return this.apollo.mutate({
      mutation:gql`
      mutation DecrAmaount($amount: Int, $menuId: ID) {
        decrAmaount(amount: $amount, menu_id: $menuId) {
          id
          order_date
          order_status
          status
          total
        }
      }`,
      variables:{
        menuId: id,
        amount: 1
      }
    })
  }

  deleteCart(id:string):Observable<any>{
    console.log(id);
    return this.apollo.mutate({
      mutation: gql`
      mutation DeleteTransaction($deleteTransactionId: ID) {
        DeleteTransaction(id: $deleteTransactionId) {
          id
          order_date
          status
          total
          menu {
            _id
            amount
            recipe_id {
              id
              recipe_name
            }
          }
        }
      }`,
      variables: {
        deleteTransactionId: id,
      }
    })
  }

  orderCart(id:string):Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
      mutation OrderTransaction($orderTransactionId: ID) {
        OrderTransaction(id: $orderTransactionId) {
          id
          order_date
          order_status
          status
          total
        }
      }`,
      variables: {
        orderTransactionId:id,
      }
    })
  }
}


