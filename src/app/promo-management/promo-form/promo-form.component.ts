import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // form builder
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { PromoManagementService } from '../promo-management.service';
import { debounceTime } from 'rxjs';
import { SubSink} from 'subsink';

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.css']
})
export class PromoFormComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  promoForm: FormGroup;
  isLoading = false;

  constructor(private fb:FormBuilder, private servicePromo: PromoManagementService, private route:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.promoForm = this.fb.group({
      ref: [null, Validators.required],
      title: [null, Validators.required],
      sub_title: [null, Validators.required],
      description: [null, Validators.required]
    });
  };

  onSubmit(){
    // let ref = this.promoForm.get('ref').value;
    // let title = this.promoForm.get('title').value;
    // let subtitle = this.promoForm.get('sub_title').value;
    // let description = this.promoForm.get('description').value;
    this.isLoading = true;

    let data = this.promoForm.value;
    if(this.promoForm.valid){
      this.subs.sink = this.servicePromo.createNewPromo(data).subscribe({
        next: (resp) => {
          console.log(resp);
          this.isLoading = false;

          Swal.fire({
            title: 'Success!',
            text: 'Promo Has Been Created',
            icon: 'success',
            confirmButtonText: 'Back To Home'
          }).then(()=>{
            this.route.navigate(['promo']);
          });
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;

          Swal.fire({
            title: 'Error!',
            text: 'Promo Has Not Been Created',
            icon: 'error',
            confirmButtonText: 'Back To Home'
          }).then(()=>{
            this.route.navigate(['promo']);
          });
        }
      });
    }else {
      this.isLoading = false;
      Swal.fire({
        title: 'Error!',
        text: 'Promo Has Not Been Filled',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    };
  };

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
