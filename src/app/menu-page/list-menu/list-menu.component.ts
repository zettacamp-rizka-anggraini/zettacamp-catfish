import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { DialogDetailMenuComponent } from '../dialog-detail-menu/dialog-detail-menu.component';
import { MenuPageService } from '../menu-page.service';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  listMenu:any;
  menulist:boolean = true;
  pagination = {
    page: 1,
    limit: 10
  }
  totalSize = 0;
  cartForm: FormGroup;

  constructor(private serviceMenu:MenuPageService, private dialog:MatDialog, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getDataMenu();
    this.getCounterQuan();
  }

  getCounterQuan(){
    this.cartForm = this.fb.group({
      quantity: [null, [Validators.min(1)]]
    })
  }

  getDataMenu(){
    this.subs.sink = this.serviceMenu.getAllMenuNow(this.pagination).valueChanges.subscribe((resp)=>{
      this.listMenu = resp?.data;
      this.listMenu = this.listMenu?.getAllRecipes?.data_recipes;
      this.listMenu = this.listMenu?.filter(stat => stat.status == "publish");
      this.totalSize = this.listMenu?.getAllRecipes?.count_publish;
      this.initStatusListMenu();
      console.log(this.totalSize);   
    })
  }

  handlePage(page: PageEvent){
    this.pagination = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    }
    this.getDataMenu();
  }

  initStatusListMenu(){
    if(this.listMenu != 0){
      this.menulist = true;
    }else{
      this.menulist = false;
    }
  }

  openDetailDialog(id:string){
    this.dialog.open(DialogDetailMenuComponent, {data:id});
  }

  async addToCart(id:string){
    const quanValue = this.cartForm.value;
    if(quanValue.quantity != null){
      const { value: cartMessage } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Your Message To Us',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        confirmButtonText: "Add To Cart",
        showCancelButton: true
      })

      if(cartMessage || !cartMessage){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Menu Have Been Add To Cart',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          const menuOrder = {
            recipe_id : id,
            amount: quanValue.quantity,
            note: cartMessage
          }
          this.subs.sink = this.serviceMenu.createOrder(menuOrder).subscribe();
          // console.log(menuOrder);
        });
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Have To Fill The Quantity',
      })
    }
    this.getDataMenu();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
