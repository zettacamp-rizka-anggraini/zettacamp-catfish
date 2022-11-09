import { Component, OnInit, OnDestroy } from '@angular/core';
import { PromoManagementService } from '../promo-management.service';
import { SubSink} from 'subsink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  promoDatas:any;
  page:number = 0;
  limit:number;
  constructor(private servicePromo:PromoManagementService, private route:Router) { }
  
  ngOnInit(): void {
    const promo = {
      limit: 10,
      page: 5
    } 
    
    this.subs.sink = this.servicePromo.getAllPromos(promo).subscribe((res)=>{
      // console.log(res);
      this.promoDatas = res.data;
      this.promoDatas = this.promoDatas.GetAllPromos;
      console.log(this.promoDatas);
    })
  }

  onNavigateCreate(){
    this.route.navigate(['/create-promo']);
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
