import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  private dataManagement = new BehaviorSubject<any>(null);
  datasManagement$ = this.dataManagement.asObservable();

  datas:any;

  constructor(private httpClient:HttpClient) { 
    this.initialization();
  }

  initialization(){
    this.fetchJsonData().subscribe(x=>{
      this.datas = x;
      this.dataManagement.next(this.datas);
    })
  }

  fetchJsonData(){
    return this.httpClient.get<any>('assets/json/newdata.json');
  }
}
