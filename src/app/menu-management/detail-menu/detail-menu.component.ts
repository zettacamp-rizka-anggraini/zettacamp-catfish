import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { MenuManagementService } from '../menu-management.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  dataMenu:any;
  id:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private serviceMenu:MenuManagementService) { }

  ngOnInit(): void {
    // console.log(this.data);
    this.id = this.data;
    this.subs.sink = this.serviceMenu.getOneMenu(this.id).subscribe((resp)=>{
      this.dataMenu = resp.data.getOneRecipes;
      console.log(this.dataMenu);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
