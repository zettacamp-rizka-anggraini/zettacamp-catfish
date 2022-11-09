import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MentorManagementService } from '../mentor-management.service';

import { Data } from '../model/data';
import { Drop } from '../model/drop';
import { Dropdown } from '../model/dropdown';

import { FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'user_type', 'email', 'status'];
  dataUser:any = [];
  dataSource =  new MatTableDataSource(this.dataUser);

  currentStatus: Data;
  filterValue: any = {
    name: '',
    user_type: '',
    email: '',
    user_status: ''
  };

  last_name_search = '';
  user_type_search = '';
  email_search = '';

  availableDropdown: Dropdown[] = Drop;
  
  nameFilter = new FormControl();
  userTypeFilter = new FormControl();
  emailFilter = new FormControl();
  dropFilter = new FormControl();

  constructor(private serviceMentor:MentorManagementService, ) { }

  ngOnInit(): void {
    this.serviceMentor.fetchJsonMentor().subscribe((data)=>{
      this.dataUser = data;console.log(this.dataUser);
      
      this.dataSource = new MatTableDataSource(this.dataUser);

      this.nameFilter.valueChanges.subscribe((nameFilterValue)=>{
        this.filterValue['name'] = nameFilterValue;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      });

      this.userTypeFilter.valueChanges.subscribe((userTypeFilterValue) => {
        this.filterValue['user_type'] = userTypeFilterValue;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      });

      this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
        this.filterValue['email'] = emailFilterValue;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      });

      this.dropFilter.valueChanges.subscribe((sourceFilterValue) => {
        this.filterValue['user_status'] = sourceFilterValue;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      });

      this.dataSource.filterPredicate = this.customFilterPredicate();
    });
  }

  customFilterPredicate() {
    const myFilterPredicate = function (data: Data, filter: string): boolean {
      console.log(data, filter);

      let searchString = JSON.parse(filter);

      let nameFound =
        data.last_name
        .toString()
        .trim()
        .toLowerCase()
        .includes((searchString.name || '').toLowerCase())

      let userTypeFound =
        data.company.user_type
        .toString()
        .trim()
        .toLowerCase()
        .includes((searchString.user_type || '').toLowerCase())

      let emailFound = data.email.includes(searchString.email || '')

      let statusFound = data.user_status.includes(searchString.user_status || '');

      return nameFound && userTypeFound && emailFound && statusFound;
    };

    return myFilterPredicate;
  }

}
