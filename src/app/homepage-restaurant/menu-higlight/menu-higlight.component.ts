import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { HomepageRestaurantService } from '../homepage-restaurant.service';

@Component({
  selector: 'app-menu-higlight',
  templateUrl: './menu-higlight.component.html',
  styleUrls: ['./menu-higlight.component.css']
})
export class MenuHiglightComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  pagination = {
    page: 1,
    limit: 10
  }
  highlight:boolean = true;
  constructor(private serviceHighOffer:HomepageRestaurantService) { }

  ngOnInit(): void {
    this.subs.sink = this.serviceHighOffer.getMenuHighlight(this.pagination, this.highlight).valueChanges.subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
