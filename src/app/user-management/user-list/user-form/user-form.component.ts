import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserManagementService } from '../../user-management.service';
import Swal from 'sweetalert2'
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  gender = [
    { value: 'male', viewValue: 'male' },
    { value: 'female', viewValue: 'female' },
  ];

  formUser:FormGroup;
  @Input() matDatepicker: boolean;

  constructor(
    private fb:FormBuilder, 
    private dialogRef: MatDialogRef<UserFormComponent>, 
    private serviceUser:UserManagementService, 
    private datePipe: DatePipe, 
    private translate: TranslateService) {
      translate.addLangs(['en','id']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formUser = this.fb.group({
      id: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      civility: [null, Validators.required],
      date_birth: [null, Validators.required],
      gender: [null, Validators.required]
    })
  }

  close(){
    this.dialogRef.close();
  }

  add(){
    // this.dialogRef.close(this.serviceUser.addNewUser(this.formUser.value));
    let data = this.formUser.value;
    this.formUser.value.date_birth = this.datePipe.transform(this.formUser.value.date_birth);
      if(this.formUser.valid){
        this.serviceUser.addNewUser(data);
        Swal.fire({
          title: this.translate.instant("userLabelTitle.title_success"),
          text: this.translate.instant("userMessageAlert.success_add"),
          icon: 'success',
          confirmButtonText: this.translate.instant("userConfrimButton.confrim_success")
        }).then(()=>{
          this.dialogRef.close();
        })
      } else {
        Swal.fire({
          title: this.translate.instant("userLabelTitle.title_error"),
          text: this.translate.instant("userMessageAlert.fail_add"),
          icon: 'error',
          confirmButtonText: this.translate.instant("userConfrimButton.confrim_fail")
        })
      }
    console.log(this.formUser.value);
  }
}

export function openAddNewUserDialog(dialog:MatDialog){
  const config = new MatDialogConfig();

  // config.disableClose = true;
  // config.autoFocus = true;

  const dialogRef = dialog.open(UserFormComponent, config);
  return dialogRef.afterClosed();
}
