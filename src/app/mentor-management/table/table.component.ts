import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MentorManagementService } from '../mentor-management.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'user_type'];
  dataUser:any = [];
  dataSource =  new MatTableDataSource(this.dataUser);

  constructor(private serviceMentor:MentorManagementService, ) { }

  ngOnInit(): void {
    this.serviceMentor.fetchJsonMentor().subscribe((data)=>{
      this.dataUser = data;
      console.log(this.dataUser[0]);
      this.dataSource = new MatTableDataSource(this.dataUser[0]);
    });
  }

}
