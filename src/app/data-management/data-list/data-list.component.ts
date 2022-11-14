import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataManagementService } from '../data-management.service';
import { SubSink} from 'subsink';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  dataList: any;
  srcImages:string = "https://cdn-icons-png.flaticon.com/512/323/323329.png";
  currentLanguage = 'en';
  language = "English";

  constructor(
    private serviceData: DataManagementService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.subs.sink = this.serviceData.datasManagement$.subscribe((x) => {
      this.dataList = x;
      console.log(this.dataList);
      // console.log(x);
    });
  }

  changeLanguage(lang:any) {
    console.log(lang);
    if (lang === 'en') {
      this.translate.use('id');
      this.currentLanguage = 'id';
      this.language = "Indonesia"
      this.srcImages = "https://cdn-icons-png.flaticon.com/512/3053/3053985.png";
    } else {
      this.translate.use('en');
      this.currentLanguage = 'en';
      this.language = "English";
      this.srcImages = "https://cdn-icons-png.flaticon.com/512/323/323329.png";
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
