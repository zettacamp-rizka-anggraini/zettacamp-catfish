import { Component, OnInit } from '@angular/core';
import { MovieLibraryService } from '../movie-library.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  listMovie:any;

  constructor(private serviceMov:MovieLibraryService) { }

  ngOnInit(): void {
    this.serviceMov.dataMovie$.subscribe((x)=>{
      this.listMovie=x.movie;
      console.log(this.listMovie);
    })
  }

}
