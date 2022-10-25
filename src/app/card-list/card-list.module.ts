import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './card-list.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardViewComponent } from './card-view/card-view.component';
import { CardListService } from './card-list.service';
import { MatCardModule } from '@angular/material/card';
import { CardFormComponent } from './card-form/card-form.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [CardListComponent, CardViewComponent, CardFormComponent],
  imports: [CommonModule, 
    MatListModule, 
    MatExpansionModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    FormsModule],
  exports: [CardListComponent],
  providers: [CardListService, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
})
export class CardListModule {}
