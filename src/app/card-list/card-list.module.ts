import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardViewComponent } from './card-view/card-view.component';
import { CardListService } from './card-list.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardListComponent, CardViewComponent],
  imports: [CommonModule, MatListModule, MatExpansionModule, MatCardModule],
  exports: [CardListComponent],
  providers: [CardListService],
})
export class CardListModule {}
