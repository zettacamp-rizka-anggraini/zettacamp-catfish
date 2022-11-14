import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-master-app';
  opened = false;

  lang = [
    { value: 'en', viewValue: 'English' },
    { value: 'id', viewValue: 'Indonesia' },
  ];

  constructor(private translate:TranslateService){
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('en');
  }

  changeLang(lang: any) {
    this.translate.use(lang);
    // console.log(lang);
  }

}
