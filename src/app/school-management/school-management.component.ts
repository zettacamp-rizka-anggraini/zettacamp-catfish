import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink} from 'subsink';
import { SchoolManagementService } from './school-management.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-school-management',
  templateUrl: './school-management.component.html',
  styleUrls: ['./school-management.component.css']
})
export class SchoolManagementComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  dataSchools:any = [];
  displayedColumns: string[] = ['short_name', 'long_name', 'status'];
  dataSource = new MatTableDataSource(this.dataSchools);
  constructor( private serviceSchool: SchoolManagementService) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceSchool.getAllSchools().subscribe((res)=>{
      // console.log(res);
      if(res){
        this.dataSchools = res.data.GetAllSchools;
        this.dataSource = new MatTableDataSource(this.dataSchools);
      }
      // console.log(this.dataSchools);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
