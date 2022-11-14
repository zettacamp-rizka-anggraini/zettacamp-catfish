import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink} from 'subsink';
import { TeacherManagementService } from './teacher-management.service';


@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css']
})
export class TeacherManagementComponent implements OnInit {
  private subs = new SubSink();
  dataTeacher:any = [];
  displayedColumns: string[] = ['short_name', 'long_name', 'status'];
  dataSource = new MatTableDataSource(this.dataTeacher);
  constructor( private serviceTeacher: TeacherManagementService) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceTeacher.getAllTeachers().subscribe((res)=>{
      // console.log(res);
      if(res){
        this.dataTeacher = res.data;
        console.log(this)
        this.dataSource = new MatTableDataSource(this.dataTeacher);
      }
      // console.log(this.dataSchools);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
