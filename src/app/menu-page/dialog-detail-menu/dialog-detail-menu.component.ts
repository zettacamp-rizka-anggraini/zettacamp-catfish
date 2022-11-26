import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { MenuPageService } from '../menu-page.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-detail-menu',
  templateUrl: './dialog-detail-menu.component.html',
  styleUrls: ['./dialog-detail-menu.component.css'],
})
export class DialogDetailMenuComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  detailMenu: any;
  cartForm: FormGroup;

  constructor(
    private serviceMenu: MenuPageService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<DialogDetailMenuComponent>,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.serviceMenu
      .getOneMenu(this.data)
      .subscribe({
        next: (resp) => {
        this.detailMenu = resp.data.getOneRecipes;}
      });
    this.getCounterQuan();
  }

  getCounterQuan() {
    this.cartForm = this.fb.group({
      quantity: [null, [Validators.min(1)]],
      message: [''],
    });
  }

  addToCart(id: string) {
    const quanValue = this.cartForm?.value;
    if (quanValue?.quantity != null && this.cartForm.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your Menu Have Been Added To Cart',
      }).then(()=>{
        const menuOrder = {
          recipe_id : id,
          amount: quanValue.quantity,
          note: quanValue.message
        }
        this.subs.sink = this.serviceMenu.addCart(menuOrder).subscribe();
        // console.log(menuOrder);
        this.dialogRef.close();
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Have To Fill The Quantity',
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
