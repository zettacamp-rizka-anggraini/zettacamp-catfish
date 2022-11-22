import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { MenuPageService } from '../menu-page.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-detail-menu',
  templateUrl: './dialog-detail-menu.component.html',
  styleUrls: ['./dialog-detail-menu.component.css'],
})
export class DialogDetailMenuComponent implements OnInit {
  private subs = new SubSink();
  detailMenu: any;
  cartForm: FormGroup;

  constructor(
    private serviceMenu: MenuPageService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<DialogDetailMenuComponent>
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.serviceMenu
      .getOneMenu(this.data)
      .subscribe((resp) => {
        this.detailMenu = resp.data.getOneRecipes;
        // console.log(this.detailMenu);
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
    const quanValue = this.cartForm.value;
    if (quanValue.quantity != null) {
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
        this.subs.sink = this.serviceMenu.createOrder(menuOrder).subscribe();
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
}
