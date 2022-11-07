import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { openAddNewUserDialog } from './user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id','first_name', 'last_name', 'civility', 'date_birth', 'gender'];
  lang = [
    { value: 'en', viewValue: 'English' },
    { value: 'id', viewValue: 'Indonesia' },
    { value: 'fr', viewValue: 'France'}
  ];
  dataUser:any = [];
  dataSource =  new MatTableDataSource(this.dataUser);
  constructor(
    private serviceUser:UserManagementService, 
    private dialog: MatDialog, 
    private translate: TranslateService) {
      translate.addLangs(['en','id', 'fr']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
    this.serviceUser.dataUser$.subscribe((data)=>{
      this.dataUser = data;
      console.log(this.dataUser);
      this.dataSource = new MatTableDataSource(this.dataUser);
    });
  }

  addNewData(){
    openAddNewUserDialog(this.dialog).subscribe();
  }

  changeLang(lang:any){
    this.translate.use(lang);
    // console.log(lang);
  }
}
