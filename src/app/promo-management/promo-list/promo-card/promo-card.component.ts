import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.css']
})
export class PromoCardComponent implements OnInit {

  @Input() promoData:any;
  constructor() { }

  ngOnInit(): void {

  }

}
