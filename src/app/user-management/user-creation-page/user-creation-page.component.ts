import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';

//ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.css'],
})
export class UserCreationPageComponent implements OnInit {
  positions = [
    { value: 'manager', viewValue: 'Manager' },
    { value: 'data scientist', viewValue: 'Data Scientist' },
    { value: 'it instructor', viewValue: 'IT instructor' },
  ];

  martialStatus = [
    { value: 'single', viewValue: 'Single' },
    { value: 'married', viewValue: 'Married' },
  ];

  lang = [
    { value: 'en', viewValue: 'English' },
    { value: 'id', viewValue: 'Indonesia' },
  ];

  signUpForm: FormGroup;
  dataUserss: any;
  id: any;

  constructor(
    private serviceUser: UserManagementService,
    private route: Router,
    private routeActived: ActivatedRoute,
    private translate: TranslateService
  ) {
    translate.addLangs(['en','id']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // this.routeActived.paramMap.subscribe(x=>{
    //   this.id = x.get('id');
    //   if(this.id){
    //     let user = this.serviceUser.getOneUser(this.id);
    //     console.log(user);
    //   } else {
    //     console.log("user not found");
    //   }
    // })

    this.initForm();
  }

  initForm() {
    if (this.routeActived.snapshot.params['id']) {
      this.id = this.routeActived.snapshot.params['id'];
    } else {
      this.id == null;
    }

    this.signUpForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      age: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null),
      position: new FormControl(null),
      martial_status: new FormControl(null),
      address: new FormGroup({
        address_name: new FormControl(null),
        zip_code: new FormControl(null),
        city: new FormControl(null),
        country: new FormControl(null),
      }),
    });

    this.getUserDatas();
    // console.log(userId)
  }

  getUserDatas() {
    this.serviceUser.userData$.subscribe((x) => {
      this.dataUserss = x;
      // console.log(this.dataUserss);
      let userId = this.dataUserss.filter((x) => x.id == this.id);
      this.signUpForm.patchValue(userId[0]);
    });
  }

  onSubmit() {
    // console.log(this.signUpForm.value);
    if (this.id) {
      let updateId = this.id;
      let updateValue = this.signUpForm.value;
      this.serviceUser.updateData(updateId, updateValue);
    } else {
      let data = this.signUpForm.value;
      this.serviceUser.addNewUser(data);
    }
    this.route.navigate(['user-management']);
  }

  changeLang(lang:any){
    this.translate.use(lang);
    // console.log(lang);
  }
}
