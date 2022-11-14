import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManagementComponent } from './data-management.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataCardComponent } from './data-list/data-card/data-card.component';
import { MaterialModule } from '../material/material.module';
import { DataDialogComponent } from './data-list/data-dialog/data-dialog.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';




@NgModule({
  declarations: [
    DataManagementComponent,
    DataListComponent,
    DataCardComponent,
    DataDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage:'en', 
    })
  ],
  exports:[
    DataManagementComponent,
    DataListComponent,
    DataCardComponent
  ]
})
export class DataManagementModule { }
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
