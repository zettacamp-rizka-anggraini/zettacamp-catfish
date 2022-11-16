import { Component, OnInit, OnDestroy} from '@angular/core';
import { SubSink } from 'subsink';
import { StockManagementService } from '../stock-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogStockComponent } from '../dialog-stock/dialog-stock.component';

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
  
  constructor(private serviceStock:StockManagementService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceStock.getAllStock().valueChanges.subscribe((resp)=>{
      this.dataStock = resp.data;
      this.dataStock = this.dataStock?.getAllIngredients;
      this.dataSource = new MatTableDataSource(this.dataStock);
      // console.log(this.dataSource);
    });
  }
  
  openDialog(id:string){
    // console.log(id);
    this.dialog.open(DialogStockComponent, {data:id});
  }

  deleteStock(id:string){
    this.subs.sink = this.serviceStock.deleteStock(id).subscribe(()=>{
      this.serviceStock.getAllStock().refetch();
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
