import { Component, OnInit, Input } from '@angular/core';
import { DataDialogComponent} from '../data-dialog/data-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {
  @Input() dataCard:any;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(id:number){
    this.dialog.open(DataDialogComponent, {data: id});
  }
}
