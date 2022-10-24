import { Component, OnInit } from '@angular/core';
import { CardListService } from '../card-list.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css', '../card-list.component.css']
})
export class CardViewComponent implements OnInit {
  selected = null;
  cardViewHero: any;
  constructor(private serviceCardHero: CardListService) { }

  ngOnInit(): void {
    this.cardViewHero = this.serviceCardHero.arrayHero;
  }

  onUpdate(event){
    // console.log(event);
    // if(this.cardViewHero.name = event.name){
    //   console.log(event.name);
    //   // this.toggle = !this.toggle;
    // }
    this.serviceCardHero.updateNameSub(event);
  }

}
