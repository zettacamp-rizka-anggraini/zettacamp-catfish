import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { SubSink } from 'subsink';
import { DetailHistoryComponent } from './detail-history/detail-history.component';
import { HistoryPageService } from './history-page.service';
import { DetailTransaction } from '../model/transaction.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  private subs =  new SubSink();
  panelOpenState = false;
  statusFilter:any = [
    {viewValue: "All", value: "none"},
    {viewValue: "Success", value:"success"},
    {viewValue: "Failed", value:"failed"}
  ]

  statusTransFilter = new FormControl('');
  status:any;

  cartList:any;
  lengthCart: any;

  //Pagination
  pagination = {
    page: 1,
    limit: 10,
  }

  totalPrice:number = 0;

  indexToShow = [];

  constructor(private serviceHistory:HistoryPageService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.initCart();
    this.filteredStatus();
  }

  initCart(){
    const order_status = this.status;
    console.log(order_status);
    this.subs.sink = this.serviceHistory?.getAllCartStatus(this.pagination, order_status)?.valueChanges?.subscribe((resp:any)=>{
      this.cartList = resp?.data?.getAllTransaction?.data_transaction?.filter((stat)=>stat?.order_status == 'success' || stat?.order_status == 'failed');
      const failed = resp?.data?.getAllTransaction?.count_failed;
      const success = resp?.data?.getAllTransaction?.count_success;
      if(order_status == "success"){
        this.lengthCart = success;
      }else if(order_status == "failed"){
        this.lengthCart = failed;
      }else if(order_status == null){
        this.lengthCart = failed + success;
      }
      this.cartList.forEach(()=>{
        this.indexToShow.push(1);
      })
      console.log(this.cartList);
    });
  }

  filteredStatus(){
    this.statusTransFilter.valueChanges.subscribe((value)=>{
      if(value == "none"){
        this.status = null;
        this.initCart();
      }else{
        this.status = value;
        this.initCart();
      } 
    });
  }

  handlePageSuccess(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.initCart();
  }

  detailsTransaction(transaction:DetailTransaction){
    this.dialog.open(DetailHistoryComponent, {data:transaction});
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
