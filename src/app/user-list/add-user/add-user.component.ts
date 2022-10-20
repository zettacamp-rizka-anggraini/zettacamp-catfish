import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class AddUserComponent implements OnInit {
  idUser:string = '';
  nameUser:string = '';

  @Output() addNewUser: EventEmitter<any>;

  constructor() { 
    this.addNewUser = new EventEmitter();
  }

  ngOnInit(): void {
  }

  submitNewUser(){
    let newObj= {
      id: this.idUser,
      name: this.nameUser
    }
    this.addNewUser.emit(newObj);
  }

}
