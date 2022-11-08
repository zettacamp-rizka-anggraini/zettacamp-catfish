import { Component, OnInit, OnDestroy } from '@angular/core';
import { PromoManagementService } from './promo-management.service';
import { SubSink} from 'subsink';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.css']
})
export class PromoManagementComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  promoData:any;

  constructor(private servicePromos: PromoManagementService) { }

  ngOnInit(): void {
    this.subs.sink = this.servicePromos.getAllPromos().subscribe((res)=>{
      // console.log(res);
      this.promoData = res.data;
      this.promoData = this.promoData.GetAllPromos[0];
      // console.log(this.promoData.title);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
