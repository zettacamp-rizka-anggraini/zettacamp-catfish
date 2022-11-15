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
  opened:boolean = false;
  landingPage:boolean = false;
  admin:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem(environment.tokenKey);
    const role = JSON.parse(localStorage.getItem(environment.role));
    // console.log(token);
    // console.log(role);
    if(token == null){
      this.landingPage = true;
    } else if (token !== null && role == "admin"){
      this.landingPage = false;
      this.admin = true;
      this.router.navigate(['/admin-page']);
    } else if(token !== null && role == "user"){
      this.landingPage = false;
      this.admin = false;
      this.router.navigate(['./user-page']);
    }
  }

  loginPage(){
    this.router.navigate(['/login-page']);
  }

  logoutPage(){
    localStorage.removeItem(environment.tokenKey);
    localStorage.removeItem(environment.tokenKey);
    this.router.navigate(['home-page']);
    this.logout = false;
    this.landingPage = true;
  }

}
