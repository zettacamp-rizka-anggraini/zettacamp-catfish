import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { DialogDetailMenuComponent } from '../dialog-detail-menu/dialog-detail-menu.component';
import { MenuPageService } from '../menu-page.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  listMenu:any;
  menulist:boolean = false;
  pagination = {
    page: 1,
    limit: 10
  }
  totalSize = 0;

  constructor(private serviceMenu:MenuPageService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getDataMenu();
  }

  getDataMenu(){
    this.subs.sink = this.serviceMenu.getAllMenuNow(this.pagination).subscribe((resp)=>{
      this.listMenu = resp.data.getAllRecipes.data_recipes;
      this.listMenu = this.listMenu.filter(stat => stat.status == "publish");
      this.totalSize = resp?.data?.getAllRecipes?.count_publish;
      this.initStatusListMenu();
      console.log(this.totalSize);   
    })
  }

  handlePage(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.getDataMenu();
  }

  initStatusListMenu(){
    if(this.listMenu == 0){
      this.menulist = false;
    }else{
      this.menulist = true;
    }
  }

  openDetailDialog(id:string){
    this.dialog.open(DialogDetailMenuComponent, {data:id});
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
