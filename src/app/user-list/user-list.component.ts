import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserListComponent implements OnInit {
  personData= [
    {id:"1", name:"Agung"},
    {id:"2", name:"Siwon Choi"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRow(row){
    this.personData.push(row);
  }

  deleteRow(row){
    for(let i in this.personData){
      if(this.personData[i]['id'] == row.id){
        this.personData.splice(parseInt(i), 1);
      }
    }
  }

}
