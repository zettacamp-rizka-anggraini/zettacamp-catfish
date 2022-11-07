import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  opened = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  createNewUser(){
    
  }
}
