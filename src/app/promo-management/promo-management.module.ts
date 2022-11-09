import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import {MatCardModule} from '@angular/material/card';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PromoCardComponent } from './promo-list/promo-card/promo-card.component';
import {MatButtonModule} from '@angular/material/button';


import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PromoSpinnerComponent } from './promo-spinner/promo-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    PromoManagementComponent,
    PromoFormComponent,
    PromoListComponent,
    PromoCardComponent,
    PromoSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    PromoManagementComponent,
    PromoListComponent,
    PromoCardComponent,
    PromoFormComponent,
    PromoSpinnerComponent
  ]
})
export class PromoManagementModule { }
