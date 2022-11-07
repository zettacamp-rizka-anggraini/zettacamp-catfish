import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {
  @Input() eachActor:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onNavigateDetail(id){
    this.route.navigate(['/actor-detail', id]);
  }
}
