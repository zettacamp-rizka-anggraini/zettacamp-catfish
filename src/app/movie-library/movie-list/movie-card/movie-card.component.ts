import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() eachMovie:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onNavigateDetail(id){
    this.route.navigate(['/movie-detail', id]);
  }
}
