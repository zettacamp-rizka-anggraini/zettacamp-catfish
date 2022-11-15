import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:"", component: CartPageComponent}
]

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CartPageComponent
  ]
})
export class CartPageModule { }
