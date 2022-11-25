import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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
export class TableMenuComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  dataMenu:any = [];
  displayedColumns: string[] = ['recipe_name', 'detail-menu','available', 'price','status', 'actions'];
  dataSource =  new MatTableDataSource(this.dataMenu);
  pagination = {
    page: 1,
    limit: 10
  }
  totalSize = 0;

  constructor(private serviceMenu:MenuManagementService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.subs.sink = this.serviceMenu.getAllMenu(this.pagination).valueChanges.subscribe((resp:any)=>{
      this.dataMenu = resp.data;
      this.dataMenu = this.dataMenu?.getAllRecipes?.data_recipes;
      this.dataSource = new MatTableDataSource(this.dataMenu);

      const publish = resp?.data?.getAllRecipes?.count_publish;
      const unpublish = resp?.data?.getAllRecipes?.count_unpublish;
      // this.totalSize = publish + unpublish;
      this.totalSize = resp?.data?.getAllRecipes?.count_total;

      // console.log(this.totalSize);
    })
  }

  handlePage(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.getData();
  }

  openDetailDialog(id:string){
    // console.log(id);
    this.dialog.open(DetailMenuComponent, {data:id});
  }

  openDialogMenu(id:string){
    this.dialog.open(DialogMenuComponent, {data:id}).afterClosed().subscribe(()=>{
      this.serviceMenu.getAllMenu(this.pagination).refetch();
    });
  }

  updateStatus(id:string, name:string, status:string){
    let textStatus: any;
    if(status == 'publish'){
      textStatus = 'Unpublish'
    } else {
      textStatus = 'Publish'
    }
    Swal.fire({
      title: 'Change Status',
      text: 'Are You Sure Want To Change Status To ' + textStatus + ' ?',
      icon: 'question',
      confirmButtonText: 'Yes, Change Status',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
        if(status=="publish"){
          const tempStatus = "unpublish";
          this.subs.sink = this.serviceMenu?.updateStatusMenu(id, tempStatus)?.subscribe(()=>{
            Swal.fire(
              'Change Success!',
              'Your Menu ' + name + ' Has Been ' + tempStatus,
              'success'
            )
            this.serviceMenu?.getAllMenu(this.pagination)?.refetch();
          });
        } else if(status=="unpublish"){
          const tempStatus = "publish";
          this.subs.sink = this.serviceMenu?.updateStatusMenu(id, tempStatus)?.subscribe(()=>{
            Swal.fire(
              'Change Success!',
              'Your Menu ' + name + ' Has Been ' + tempStatus,
              'success'
            )
            this.serviceMenu?.getAllMenu(this.pagination)?.refetch();
          });
        }
      }
    })
  }

  deleteMenu(id:string, name:string){
    Swal.fire({
      title: 'Are you sure want to delete this menu?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subs.sink = this.serviceMenu.deleteMenu(id).subscribe({
          next: ()=>{
            Swal.fire(
              'Deleted!',
              'Your stock '+ name +' has been deleted.',
              'success'
            ),
            this.serviceMenu.getAllMenu(this.pagination).refetch();
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
    console.log(id,name);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
