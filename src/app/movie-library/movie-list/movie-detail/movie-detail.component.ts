import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieLibraryService } from '../../movie-library.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  data:any;
  movieid:any;

  constructor(private serviceMov:MovieLibraryService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.serviceMov.dataMovie$.subscribe((dataMovie)=>{
      this.movieid = this.activeRoute.snapshot.params['id'];
      this.data = dataMovie.movie;
      this.data = this.data?.filter((x)=>x.id == this.movieid)[0];
      // this.data = this.data.getValue;
      // console.log(this.data);
    });
  }

}
