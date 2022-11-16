import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { StockManagementService } from '../stock-management.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialog-stock',
  templateUrl: './dialog-stock.component.html',
  styleUrls: ['./dialog-stock.component.css']
})
export class DialogStockComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  private id:any;
  dataStock:any;
  formStock: FormGroup;
  addData:boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private serviceStock:StockManagementService, private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.initForm();
  }

  initForm(){
    this.formStock = this.fb.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]]
    })

    if(this.data){
      this.id = this.data;
      this.id = String(this.id);
      this.addData = false;
      this.serviceStock.getOneStock(this.id).subscribe(resp=>{
        this.dataStock = resp.data.getOneIngredients;
        console.log(this.dataStock);
        this.formStock.patchValue(this.dataStock);
      });
    }
  }

  onSubmit(){
    if(this.id){
      const updatedId = this.id;
      const updatedValue = this.formStock.value;
      if(this.formStock.valid){
        this.subs.sink = this.serviceStock.updateStock(updatedId, updatedValue.name, updatedValue.stock).subscribe(()=>{
          Swal.fire({
              title: 'Success!',
              text: 'Data Stock Has Been Created',
              icon: 'success',
              confirmButtonText: 'Close'
            })
          this.serviceStock.getAllStock().refetch();
        });
      }
    } else {
      const stockData = this.formStock.value;
      if(this.formStock.valid){
        this.subs.sink = this.serviceStock.createNewStock(stockData.name, stockData.stock).subscribe({
          next: (resp) => {
            console.log(resp);
            this.serviceStock.getAllStock().refetch();
            Swal.fire({
              title: 'Success!',
              text: 'New Stock Has Been Created',
              icon: 'success',
              confirmButtonText: 'Back To Home'
            })
          },
          error: () => {
            // console.log(error);
  
            Swal.fire({
              title: 'Error!',
              text: 'New Stock Has Not Been Created',
              icon: 'error',
              confirmButtonText: 'Back To Home'
            })
          }
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
