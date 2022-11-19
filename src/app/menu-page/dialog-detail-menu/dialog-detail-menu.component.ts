import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { MenuPageService } from '../menu-page.service';

@Component({
  selector: 'app-dialog-detail-menu',
  templateUrl: './dialog-detail-menu.component.html',
  styleUrls: ['./dialog-detail-menu.component.css']
})
export class DialogDetailMenuComponent implements OnInit {
  private subs = new SubSink();
  detailMenu:any;
  quantity:FormControl;

  constructor(private serviceMenu:MenuPageService, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceMenu.getOneMenu(this.data).subscribe((resp)=>{
      this.detailMenu = resp.data.getOneRecipes;
      // console.log(this.detailMenu);
    })

    this.quantity = new FormControl();
  }

}
