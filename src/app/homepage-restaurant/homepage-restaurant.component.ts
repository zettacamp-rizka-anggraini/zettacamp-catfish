import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage-restaurant',
  templateUrl: './homepage-restaurant.component.html',
  styleUrls: ['./homepage-restaurant.component.css']
})
export class HomepageRestaurantComponent implements OnInit {
  logout:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem(environment.tokenKey);
    if(token !== null){
      this.logout = true;
    }
  }

  loginPage(){
    this.router.navigate(['/login-page']);
  }

  logoutPage(){
    localStorage.removeItem(environment.tokenKey);
    this.router.navigate(['/home-page']);
    this.logout = false;
  }

}
