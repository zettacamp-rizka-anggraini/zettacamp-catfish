import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieLibraryService } from '../../movie-library.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  data:any;
  actorid:any;

  constructor(private serviceAct:MovieLibraryService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.serviceAct.dataActor$.subscribe((dataMovie)=>{
      this.actorid = this.activeRoute.snapshot.params['id'];
      this.data = dataMovie.actor;
      this.data = this.data?.filter((x)=>x.id == this.actorid)[0];
      // this.data = this.data.getValue;
      // console.log(this.data);
    });
  }


}
