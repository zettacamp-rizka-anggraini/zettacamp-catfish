import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { CartPageService } from '../cart-page.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.css']
})
export class DialogCartComponent implements OnInit {
  private subs = new SubSink();
  private id_item:any;
  dataCart:any;
  formCart:FormGroup;
  pagination:any = {
    page: 1,
    limit: 10,
    stock: 1
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceCart: CartPageService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogCartComponent>
    ) { }

  ngOnInit(): void {
    // console.log(this.data.id_item, this.data.id_recipe);
    this.initForm();
  }

  initForm() {
    this.formCart = this.fb.group({
      note: ['']
    });

    if (this.data) {
      this.id_item = this.data.id_item;
      console.log(this.id_item);
      this.id_item = String(this.id_item);
      this.serviceCart.getOneCart(this.id_item).subscribe((resp) => {
        this.dataCart = resp?.data?.getOneTransaction;
        let tempNote:any = {};

        this.dataCart.menu.forEach(menu => {
          console.log(menu.note);
          tempNote = {
            note: menu.note
          }
        });

        // console.log(this.dataCart)
        this.formCart.patchValue(tempNote);
      });
    }
  }

  onSubmit() {
    const updatedId = this.data.id_recipe;
    const updatedValue = this.formCart.value;
    if (updatedId) {
      if (this.formCart.valid) {
        this.subs.sink = this.serviceCart
          .updateCart(updatedId, updatedValue.note)
          .subscribe({
            next: () => {
              Swal.fire({
                title: 'Updated',
                text: 'Data Has Been Updated',
                icon: 'success',
                confirmButtonText: 'Ok',
              }).then(() => {
                this.serviceCart.getAllCart(this.pagination).refetch();
                this.dialogRef.close();
              });
            },
            error: () => {
              Swal.fire({
                title: 'Error!',
                text: 'Something Happend!',
                icon: 'error',
                confirmButtonText: 'OK',
              });
            },
          });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Data Invalid!',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } 
  }

}
