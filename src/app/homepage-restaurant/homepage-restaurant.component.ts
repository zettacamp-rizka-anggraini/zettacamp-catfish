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
  menuAllow:any = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem(environment.tokenKey);
    const role = JSON.parse(localStorage.getItem(environment.role));
    const usertype = JSON.parse(localStorage.getItem(environment.usertype));
    console.log(token);
    // console.log(role);
    // console.log(usertype);
    if(token == null){
      this.landingPage = true;
    } else if (token !== null && role == "admin"){
      this.landingPage = false;
      this.admin = true;
      this.menuAllow = usertype.filter((resp)=>resp.view===true);
      // console.log(this.menuAllow);
      this.router.navigate(['/admin-page']);
    } else if(token !== null && role == "user"){
      this.landingPage = false;
      this.admin = false;
      this.menuAllow = usertype.filter((resp)=>resp.view===true);
      // console.log(this.menuAllow);
      this.router.navigate(['./user-page']);
    }
    console.log(this.menuAllow);
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
