import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onNavigateCreate(){
    this.route.navigate(['/creation-page']);
  }

}
