import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  counter: FormGroup;

  constructor(private serviceMenu:MenuPageService, @Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceMenu.getOneMenu(this.data).subscribe((resp)=>{
      this.detailMenu = resp.data.getOneRecipes;
      // console.log(this.detailMenu);
    })

    this.getCounterQuan();
  }

  getCounterQuan(){
    this.counter = this.fb.group({
      quantity: ['', [Validators.min(1)]]
    })
  }

  addToCart(id:string){

  }

}
