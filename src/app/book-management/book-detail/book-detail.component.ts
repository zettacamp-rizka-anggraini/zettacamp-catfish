import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookManagementService } from '../book-management.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  id:string;
  name: string;
  author: string;
  publisher: string;
  publish_date: string;
  address: string; 
  origin: string;
  paramsSubscription: Subscription;

  constructor(private routeActive: ActivatedRoute, private route:Router) {}
  
  ngOnInit(): void {
    // this.serviceSelected.dataSelected$.subscribe(dataSelected => {
      //   this.bookSelected = dataSelected;
      // })
      this.paramsSubscription = this.routeActive.paramMap.subscribe((params: ParamMap) => {
        console.log(params);
        this.id = params.get('id');
        this.name = params.get('name');
        this.author = params.get('author');
        this.publisher = params.get('publisher');
        this.publish_date = params.get('publish_date');
        this.address = params.get('address');
        this.origin = params.get('origin');
        // console.log(this.id, this.name);
      })
      
      // this.id=this.routeActive.snapshot.paramMap.get("id");
      // this.name=this.routeActive.snapshot.paramMap.get("name");
      // this.author=this.routeActive.snapshot.paramMap.get("author");
      // this.publisher=this.routeActive.snapshot.paramMap.get("publisher");
      // this.publish_date=this.routeActive.snapshot.paramMap.get("publish_date");
      // this.address=this.routeActive.snapshot.paramMap.get("address");
      // this.origin=this.routeActive.snapshot.paramMap.get("origin");
      // console.log(this.id, this.origin);
    }
    
    ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
      console.log('Destroy Succcess');
    }
    
    onBack(){
      this.route.navigate(['./'])
  }
}
