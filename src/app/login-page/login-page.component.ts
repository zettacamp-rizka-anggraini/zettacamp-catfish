import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private subs = new SubSink();
  loginreload:boolean = true;
  loginForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceLogin: LoginPageService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loginreload = false;
    }, 500);
    this.initFormGroup();
  }

  initFormGroup(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    const payload = this.loginForm.value;
    // console.log(payload.email);
    this.subs.sink = this.serviceLogin.loginUser(payload.email, payload.password).subscribe(resp => {
      console.log(resp);
      if(resp) {
        this.router.navigate(['/home-page']);
      }
    });
  }

}
