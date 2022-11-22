import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { CartPageService } from '../cart-page.service';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})

export class ListCartComponent implements OnInit {
  private subs =  new SubSink();
  panelOpenState = false;

  //Temp Cart
  private tempCart:any;

  //Pending State
  cartListPending:any;
  pendingCart: any;

  //Success State
  cartListSuccess:any;
  successCart: any;

   //Failed State
   cartListFailed:any;
   failedCart: any;

  //Pagination
  pagination = {
    page: 1,
    limit: 10,
  }

  totalPrice:number = 0;
  addSuccess:boolean = true;

  constructor(private serviceCart:CartPageService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.initCartPending();
    this.initCartSuccess();
    this.initCartFailed();
  }

  initCartPending(){
    const order_status = "pending";
    this.subs.sink = this.serviceCart.getAllCartStatus(this.pagination, order_status).valueChanges.subscribe((resp:any)=>{
      this.cartListPending = resp?.data?.getAllTransaction?.data_transaction?.filter((stat)=>stat.status == "active");
      this.pendingCart = resp?.data?.getAllTransaction?.count_pending;
      console.log(this.cartListPending);
    });
  }

  initCartSuccess(){
    const order_status = "success";
    this.subs.sink = this.serviceCart.getAllCartStatus(this.pagination, order_status).valueChanges.subscribe((resp:any)=>{
      this.cartListSuccess = resp?.data?.getAllTransaction?.data_transaction?.filter((stat)=>stat.status == "active");
      this.successCart = resp?.data?.getAllTransaction?.count_success;
      console.log(this.cartListSuccess);
    });
  }

  initCartFailed(){
    const order_status = "failed";
    this.subs.sink = this.serviceCart.getAllCartStatus(this.pagination, order_status).valueChanges.subscribe((resp:any)=>{
      this.cartListFailed = resp?.data?.getAllTransaction?.data_transaction?.filter((stat)=>stat.status == "active");
      this.failedCart = resp?.data?.getAllTransaction?.count_success;
      console.log(this.cartListFailed);
    });
  }

  handlePagePending(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.initCartPending();
  }

  handlePageSuccess(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.initCartSuccess();
  }

  addAmount(id:string){
    console.log(id);
    this.serviceCart.updateAmountPlus(id).subscribe();
    this.serviceCart.getAllCart(this.pagination).refetch();
  }

  minAmount(id:string){
    console.log(id);
    this.serviceCart.updateAmountMinus(id).subscribe();
    this.serviceCart.getAllCart(this.pagination).refetch();
  }

  orderBuy(id:string){
    // console.log(id);
      Swal.fire({
        title: 'Are you sure want to order this cart?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i order it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.subs.sink = this.serviceCart.orderCart(id).subscribe({
            next: ()=>{
              Swal.fire(
                'Success!',
                'Your cart has been order it.',
                'success'
              ),
              this.serviceCart.getAllCart(this.pagination).refetch();
            },
            error: ()=>{
              Swal.fire(
                'Error!',
                'Your cart cannot be order it.',
                'error'
              )
              this.serviceCart.getAllCart(this.pagination).refetch();
            }
          });
        }
      })
  }

  editCartDialog(idItem:any, idRecipe:any){
    this.dialog.open(DialogCartComponent, {data: {id_item:idItem, id_recipe:idRecipe}});
  }

  deleteCart(id:string, name:string){
    console.log(id)
    Swal.fire({
      title: 'Are you sure want to delete this cart?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subs.sink = this.serviceCart.deleteCart(id).subscribe({
          next: ()=>{
            Swal.fire(
              'Deleted!',
              'Your cart '+ name +' has been deleted.',
              'success'
            ),
            this.serviceCart.getAllCart(this.pagination).refetch();
          },
          error: ()=>{
            Swal.fire(
              'Error!',
              'Your cart '+ name +' cannot be deleted.',
              'error'
            )
            this.serviceCart.getAllCart(this.pagination).refetch();
          }
        });
      }
    })
  }

}
