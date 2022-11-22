import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SubSink } from 'subsink';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  loginreload:boolean = true;
  loginForm: FormGroup;
  hide:boolean = true;
  currentLanguage = 'en';
  srcImages: string = 'https://cdn-icons-png.flaticon.com/512/323/323329.png';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceLogin: LoginPageService,
    private translate: TranslateService
  ) { 
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('en');
  }

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

  changeLanguage(lang:any) {
    console.log(lang);
    if (lang === 'en') {
      this.translate.use('id');
      this.currentLanguage = 'id';
      this.srcImages = "https://cdn-icons-png.flaticon.com/512/3053/3053985.png";
    } else {
      this.translate.use('en');
      this.currentLanguage = 'en';
      this.srcImages = "https://cdn-icons-png.flaticon.com/512/323/323329.png";
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
