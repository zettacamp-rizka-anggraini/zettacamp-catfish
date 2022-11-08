import { Component, OnInit } from '@angular/core';
import { UserManagementService } from './user-management.service';
import { SubSink} from 'subsink';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  private subs = new SubSink();
  showData: boolean = false;
  searchTable: string = "";
  dataUser:any = [];
  displayedColumns: string[] = ['first_name', 'last_name', 'civility'];
  dataSource = new MatTableDataSource(this.dataUser);
  constructor(private serviceUser: UserManagementService) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceUser.getAllUser().subscribe((res)=>{
      // console.log(res);
      if(res){
        this.dataUser = res.data.GetAllUsers;
        this.dataSource = new MatTableDataSource(this.dataUser);
      }
      // console.log(this.dataUser);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    if (filterValue.length > 0 && filterValue.length < 4){
      this.showData = true;
    } else if(filterValue.length >= 4){
      this.subs.sink = this.serviceUser.getFilteredUser(filterValue).subscribe((res:any)=>{
        this.dataUser = res.data.GetAllUsers;
        this.dataSource = new MatTableDataSource(this.dataUser);
      })
      this.showData = false;
    } else {
      this.subs.sink = this.serviceUser.getAllUser().subscribe((res)=>{
        if(res){
          this.dataUser = res.data.GetAllUsers;
          this.dataSource = new MatTableDataSource(this.dataUser);
        }
      });
      this.showData = false;
    }
  }

}
