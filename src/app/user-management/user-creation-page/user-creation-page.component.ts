import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { FormBuilder } from '@angular/forms'; // form builder
import { FormArray } from '@angular/forms'; // form array


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

  labelAddress = [
    { value: 'main', viewValue: 'Main' },
    { value: 'additional', viewValue: 'Additional' },
  ];

  signUpForm: FormGroup;
  dataUserss: any;
  userId:any;
  id: any;
  labelStatusAddress:any;
  status:boolean;

  constructor(
    private serviceUser: UserManagementService,
    private route: Router,
    private routeActived: ActivatedRoute,
    private translate: TranslateService,
    private fb: FormBuilder
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
    
    this.signUpForm = this.fb.group({
      id: [null],
      name: [null],
      age: [null],
      gender: [null],
      email: [null],
      position: [null],
      martial_status: [null],
      address: this.fb.array([]),
    });
    
    if (this.routeActived.snapshot.params['id']) {
      this.id = this.routeActived.snapshot.params['id'];
      this.getUserDatas(this.id);
    } else {
      this.id == null;
    }
    // console.log(userId)
  }

  getUserDatas(id) {
      this.serviceUser.userData$.subscribe((x) => {
        this.dataUserss = x;
        this.userId = this.dataUserss.filter((x) => x.id == id);
        this.labelStatusAddress = this.userId.status;

        // Instead, correct the class name and use the optional chaining (?.) operator to check if the element at index 0 contains the property. undefined or null.
        let sum = this.userId[0]?.address.length; 
  
        for(let i=0; i < sum;i++){
          this.addNewAddress();
        }
        
        this.signUpForm.patchValue(this.userId[0]);
      }); 
  }

  get addresses(): FormArray{
    return this.signUpForm.get('address') as FormArray;
  }

  newAddress(): FormGroup {
    return this.fb.group({
      status: [null],
      address_name: [null],
      zip_code: [null],
      city: [null],
      country: [null],
    })
  }

  addNewAddress(){
    this.addresses.push(this.newAddress());
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

  hasStatusOptions(statusAdd){
    if(statusAdd == "main"){
      console.log(statusAdd);
    } else if(statusAdd == "additional") {
      this.status = false;
    }
  }


  removeAddress(i:number){
    this.addresses.removeAt(i);
  }
}
