import { Component, OnInit } from '@angular/core';
import { MovieLibraryService } from '../movie-library.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actorList:any;

  constructor(private serviceAct:MovieLibraryService) { }

  ngOnInit(): void {
    this.serviceAct.dataActor$.subscribe((data)=>{
      this.actorList = data.actor;
      console.log(this.actorList);
    })
  }

}
