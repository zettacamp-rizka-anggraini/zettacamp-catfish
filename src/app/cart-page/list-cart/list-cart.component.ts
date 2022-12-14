import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { CartPageService } from '../cart-page.service';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})

export class ListCartComponent implements OnInit, OnDestroy {
  private subs =  new SubSink();
  panelOpenState = false;

  //Pending State
  cartListPending:any;
  pendingCart: any;
  tempCondition:any;

  //Pagination
  pagination = {
    page: 1,
    limit: 10,
  }

  totalPrice:number = 0;
  addSuccess:boolean = true;

  indexToShowSuccess = [];
  indexToShowFailed = [];

  constructor(private serviceCart:CartPageService, private dialog:MatDialog, private translate:TranslateService, private router:Router) { }

  ngOnInit(): void {
    this.initCartPending();
  }

  initCartPending(){
    const order_status = "pending";
    const role_in = JSON.parse(localStorage.getItem(environment.role));
    this.subs.sink = this.serviceCart?.getAllCartStatus(this.pagination, order_status)?.valueChanges?.subscribe((resp:any)=>{
        this.cartListPending = resp?.data?.getAllTransaction?.data_transaction?.filter((stat)=>stat?.status == "active");
        this.cartListPending.forEach(element => {
          if(element.user_id.role == role_in){
            this.cartListPending = element;
            this.tempCondition = element.menu.length;
          }
        });
        this.pendingCart = resp?.data?.getAllTransaction?.count_pending;
    });
  }


  handlePagePending(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.initCartPending();
  }

  onImageError(event){
    event.target.src = "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
  
  addAmount(id:string){
    this.subs.sink = this.serviceCart.updateAmountPlus(id).subscribe();
    this.initCartPending();
  }

  minAmount(id:string){
    this.subs.sink = this.serviceCart.updateAmountMinus(id).subscribe();
    this.initCartPending();
  }

  orderNow(){
      Swal.fire({
        title: this.translate.instant("confrim-order.title"),
        text: this.translate.instant("confrim-order.text"),
        icon: 'question',
        cancelButtonText: this.translate.instant("confrim-order.cancel-btn"),
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.translate.instant("confrim-order.order-btn")
      }).then((result) => {
        if (result.isConfirmed) {
          this.subs.sink = this.serviceCart.orderCart().subscribe({
            next: ()=>{
              Swal.fire(
                this.translate.instant("confrim-order.title-success"),
                this.translate.instant("confrim-order.text-success"),
                'success'
              ),
              this.initCartPending();
              this.router.navigate(['main-page/history-page']);
            },
            error: (error)=>{
              // console.log(error);
              if(error.message.includes('unpublish')){
                Swal.fire(
                  this.translate.instant("confrim-order.title-error"),
                  this.translate.instant("confrim-order.text-error-1"),
                  'error'
                )
              } else if(error.message.includes('less')){
                Swal.fire(
                  this.translate.instant("alert-saldo.title"),
                  this.translate.instant("alert-saldo.text"),
                  'error'
                )
              }else{
                Swal.fire(
                  this.translate.instant("confrim-order.title-error"),
                  this.translate.instant("confrim-order.text-error-2"),
                  'error'
                )
              }
              this.initCartPending();
            }
          });
        }
      })
  }

  editCartDialog(idRecipe:any){
    const dialogRef = this.dialog.open(DialogCartComponent, {data: {id_recipe:idRecipe}});
    dialogRef.afterClosed().subscribe(()=>{
      this.initCartPending();
    });
  }

  deleteCart(id:string, name:string){
    Swal.fire({
      title: this.translate.instant("confrim-order.title-delete"),
      text: this.translate.instant("confrim-order.text"),
      icon: 'warning',
      showCancelButton: true,
      showCloseButton: this.translate.instant("delete-confrim-menu.cancel-btn"),
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant("delete-confrim-menu.confrim-btn")
    }).then((result) => {
      if (result.isConfirmed) {
        this.subs.sink = this.serviceCart.deleteCart(id).subscribe({
          next: ()=>{
            Swal.fire(
              this.translate.instant("delete-success-menu.title"),
              this.translate.instant("confrim-order.text-1")+ ' ' + name + ' ' + this.translate.instant("delete-success-menu.text-2"),
              'success'
            ),
            this.initCartPending();
          },
          error: ()=>{
            Swal.fire(
              this.translate.instant("delete-fail-menu.title"),
              this.translate.instant("confrim-order.text-1") + ' ' + name + ' ' + this.translate.instant("delete-fail-menu.text-2"),
              'error'
            )
            this.initCartPending();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
