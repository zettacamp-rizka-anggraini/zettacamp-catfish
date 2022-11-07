import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private user = new BehaviorSubject<any>(null);
  dataUser$ = this.user.asObservable();

  dataUserss:any;

  constructor(private httpClient:HttpClient) { 
    this.initialization();
  }

  initialization(){
    this.fetchDataJson().subscribe((x)=>{
      this.dataUserss = x.user;
      this.user.next(this.dataUserss);
    })
  }

  fetchDataJson(){
    return this.httpClient.get<any>('assets/json/user.json');
  }

  addNewUser(dataUser){
    // console.log(dataUser);
    // const currentDataValue = this.user.value;
    // const updateNewData = [...currentDataValue, dataUser];
    this.dataUserss.push(dataUser);
    this.user.next(this.dataUserss);
    console.log("Passing Data Success");
  }
}
