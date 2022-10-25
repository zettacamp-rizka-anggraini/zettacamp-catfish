import { Component, OnInit } from '@angular/core';
import { CardListService } from '../card-list.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css', '../card-list.component.css']
})
export class CardViewComponent implements OnInit {
  cardViewHero: any;
  constructor(private serviceCardHero: CardListService) { }

  ngOnInit(): void {
    // this.cardViewHero = this.serviceCardHero.arrayHero;
    this.serviceCardHero.dataHero$.subscribe(heroUser => {
      this.cardViewHero = heroUser;
    })
  }

  onUpdate(event, index){
    // console.log(event);
    // if(this.cardViewHero.name = event.name){
    //   console.log(event.name);
    //   // this.toggle = !this.toggle;
    // }
    let obj = {
      event,
      index
    }
    this.serviceCardHero.updateNameSub(obj);
  }

}
