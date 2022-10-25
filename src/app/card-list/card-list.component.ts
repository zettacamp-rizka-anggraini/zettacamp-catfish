import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit, OnDestroy {
  arrayDataHero:any;
  
  constructor(private serviceData: CardListService) { }
  
  ngOnInit(): void {
    this.serviceData.dataHero$.subscribe(heroUser => {
      console.log(heroUser);
      this.arrayDataHero = heroUser;
    })
  }

  ngOnDestroy(): void {
   
  }
  
}
