import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { DetailMenuComponent } from '../detail-menu/detail-menu.component';
import { DialogMenuComponent } from '../dialog-menu/dialog-menu.component';
import { MenuManagementService } from '../menu-management.service';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit {
  private subs = new SubSink();
  dataMenu:any = [];
  displayedColumns: string[] = ['recipe_name', 'detail-menu','available', 'price','status', 'actions'];
  dataSource =  new MatTableDataSource(this.dataMenu);
  constructor(private serviceMenu:MenuManagementService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceMenu.getAllMenu().valueChanges.subscribe((resp)=>{
      this.dataMenu = resp.data;
      this.dataMenu = this.dataMenu?.getAllRecipes?.data;
      this.dataSource = new MatTableDataSource(this.dataMenu);
      console.log(this.dataMenu);
    })
  }

  openDetailDialog(id:string){
    // console.log(id);
    this.dialog.open(DetailMenuComponent, {data:id});
  }

  openDialogMenu(id:string){
    this.dialog.open(DialogMenuComponent, {data:id});
  }

  updateStatus(id:string, status:string){
    Swal.fire({
      title: 'Change Status',
      text: 'Are You Sure Want To Change Status?',
      icon: 'question',
      confirmButtonText: 'Yes, Change Status',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
        if(status=="publish"){
          const tempStatus = "unpublish";
          this.subs.sink = this.serviceMenu.updateStatusMenu(id, tempStatus).subscribe(()=>{
            this.serviceMenu.getAllMenu().refetch();
          });
        } else if(status=="unpublish"){
          const tempStatus = "publish";
          this.subs.sink = this.serviceMenu.updateStatusMenu(id, tempStatus).subscribe(()=>{
            this.serviceMenu.getAllMenu().refetch();
          });
        }
        Swal.fire(
          'Change Success!',
          'Your Status Have Been Changed',
          'success'
        )
      }
    })
  }

  deleteMenu(){

  }

}
