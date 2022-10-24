import { Component, OnInit } from '@angular/core';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  arrayDataHero:any;
  
  constructor(private serviceData: CardListService) { }

  ngOnInit(): void {
    this.arrayDataHero=this.serviceData.arrayHero;
  }

}
