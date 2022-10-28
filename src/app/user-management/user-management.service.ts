import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private user = new BehaviorSubject<any>([]);
  userData$ = this.user.asObservable();

  private userEdit = new BehaviorSubject<{}>({});
  userDataEdit = this.userEdit.asObservable();

  usert;

  constructor(private httpClient: HttpClient) { 
    this.dummyInitList();
    // console.log(this.user);
  }
  
  dummyInitList(){
    this.fetchUserJson().subscribe(x => {
      this.usert = x.user;
      this.user.next(this.usert);
    });
  }

  fetchUserJson(){
    return this.httpClient.get<any>('assets/json/users.json');
  }

  addNewUser(dataUser){
    // console.log(dataUser);
    // const currentDataValue = this.user.value;
    // const updateNewData = [...currentDataValue, dataUser];
    this.usert.push(dataUser);
    this.user.next(this.usert);
    console.log("Passing Data Success");
  }

  // getOneUser(id:string){
  //   // console.log(id);
  //   // console.log(this.usert);
  //   let now = this.usert.filter(x => x.id == id);
  //   return now;
  // }

  updateData(currentId, newValue){
    // console.log(this.usert[0].id);
    let index = parseInt(currentId)-1;
    if(this.usert[index].id == currentId){
      this.usert[index] = newValue;
    }
  }

}