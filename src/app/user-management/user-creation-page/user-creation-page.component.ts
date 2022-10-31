import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { FormBuilder } from '@angular/forms'; // form builder
import { FormArray } from '@angular/forms'; // form array
import Swal from 'sweetalert2'

//ngx-translate
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

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

    this.signUpForm.get('name').valueChanges.subscribe((currentValue)=>{
      // console.log("value berubah");
      let regex =  /[^A-z|\s]/;
      // console.log(currentValue);
      let names:any;

      names = currentValue.replace(regex, "");
      // console.log(names);
      this.signUpForm.get("name").patchValue(names, {emitEvent: false});
    })
  }

  initForm() {
    
    this.signUpForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      age: [null, Validators.required, this.minAgeFormValidator],
      gender: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      position: [null, Validators.required],
      martial_status: [null, Validators.required],
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
      status: [null, Validators.required],
      address_name: [null, Validators.required],
      zip_code: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
    })
  }

  addNewAddress(){
    this.addresses.push(this.newAddress());
  }

  
  onSubmit() {
    // console.log(this.signUpForm.value);
    let updateId = this.id;
    let updateValue = this.signUpForm.value;
    if (updateId) {
      if(this.signUpForm.valid){
        // console.log("berhasil");
        this.serviceUser.updateData(updateId, updateValue);
        Swal.fire({
          title: 'Success!',
          text: 'Data has been Edited',
          icon: 'success',
          confirmButtonText: 'Back To Home'
        }).then(()=>{
          this.route.navigate(['user-management']);
        })
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Data cant be Edited',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    } else {
      let data = this.signUpForm.value;
      if(this.signUpForm.valid){
        this.serviceUser.addNewUser(data);
        Swal.fire({
          title: 'Success!',
          text: 'Data has been Edited',
          icon: 'success',
          confirmButtonText: 'Back To Home'
        }).then(()=>{
          this.route.navigate(['user-management']);
        })
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Data Has Not Been Filled',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
    
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

  //Validators
  minAgeFormValidator(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if(control.value <= 10){
          resolve({'ageIsForbidden':true});
          // return 'age not valid';
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // noCharacterNameValidator(control: FormControl): Promise<any> | Observable<any>{
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if(!/^[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]+$/u.test(control.value) || /^[0-9]+$/u.test(control.value)){
  //         resolve({'nameIsForbidden':true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1200);
  //   });
  //   return promise;
  // }

  getEmailErrorMessage(){
    if(this.signUpForm.get('email').hasError('required')){
      return 'Input Your Email';
    }

    return this.signUpForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }
}
