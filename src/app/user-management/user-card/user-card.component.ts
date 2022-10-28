import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  usersList:any;
  constructor(private serviceUser:UserManagementService, private route:Router) { }

  ngOnInit(): void {
    this.serviceUser.userData$.subscribe(dataUser => {
      this.usersList = dataUser;
      // console.log(this.usersList);
    })
  }

  onEditUser(user){
    this.route.navigate(['/edit-page', user.id]);
    // console.log(user);
  }

}
