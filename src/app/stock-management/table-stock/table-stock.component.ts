import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { SubSink } from 'subsink';
import { StockManagementService } from '../stock-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogStockComponent } from '../dialog-stock/dialog-stock.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.css']
})
export class TableStockComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  dataStock:any = [];
  displayedColumns: string[] = ['name','stock', 'status','actions'];
  dataSource =  new MatTableDataSource(this.dataStock);
  pagination:any = {
    page: 1,
    limit: 10,
    stock: 1
  }
  totalSize = 0;
  
  constructor(private serviceStock:StockManagementService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.subs.sink = this.serviceStock.getAllStock(this.pagination).valueChanges.subscribe((resp:any)=>{
      this.dataStock = resp?.data;
      this.dataStock = this.dataStock?.getAllIngredients.data;
      this.dataSource = new MatTableDataSource(this.dataStock);
      this.totalSize = resp?.data?.getAllIngredients?.count_active;
      // console.log(this.dataStock);
    });
  }

  handlePage(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize,
      stock: 1
    }

    this.getData();
  }
  
  openDialog(id:string){
    // console.log(id);
    this.dialog.open(DialogStockComponent, {data:id}).afterClosed().subscribe(()=>{
      // this.serviceStock.getAllStock(this.pagination).refetch();
    });
  }

  deleteStock(id:string, name:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subs.sink = this.serviceStock.deleteStock(id).subscribe({
          next: ()=>{
            Swal.fire(
              'Deleted!',
              'Your stock '+ name +' has been deleted.',
              'success'
            ),
            this.serviceStock.getAllStock(this.pagination).refetch();
          },
          error: ()=>{
            Swal.fire(
              'Error!',
              'Your stock '+ name +' cannot be deleted.',
              'error'
            )
          }
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
