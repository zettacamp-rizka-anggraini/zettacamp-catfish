import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardContentComponent } from './card-content/card-content.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
