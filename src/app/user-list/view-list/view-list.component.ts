import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})
export class ViewListComponent implements OnInit {
  @Input() listUser:any;
  @Output() getDeleteRow: EventEmitter<any>;
  constructor() { 
    this.getDeleteRow = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onDelete(row){
    this.getDeleteRow.emit(row);
  }

}
