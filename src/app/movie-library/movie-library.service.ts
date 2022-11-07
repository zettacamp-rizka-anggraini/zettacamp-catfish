import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Actor } from './movie-model/actor';
import { Movie } from './movie-model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieLibraryService {
  //movie list
  private movie = new BehaviorSubject<any>([]);
  dataMovie$ = this.movie.asObservable();
  //actor list
  private actor = new BehaviorSubject<any>([]);
  dataActor$ = this.actor.asObservable();
  
  //actor data
  // private actorData = new BehaviorSubject<Actor[]>([]);
  // actorData$ = this.actorData.asObservable();

  dataMov;
  dataAct;

  constructor(private httpClient:HttpClient) { 
    this.dummyInitList();
  }

  dummyInitList(){
    this.fetchMovieJSON().subscribe(x=>{
      this.dataMov = x;
      this.movie.next(this.dataMov);
    })

    this.fetchActorJSON().subscribe(y=>{
      this.dataAct = y;
      this.actor.next(this.dataAct);
    })
  }

  fetchMovieJSON(){
    return this.httpClient.get<Movie[]>('assets/json/movie.json');
  }

  fetchActorJSON(){
    return this.httpClient.get<Actor[]>('assets/json/actor.json');
  }

  // getActor(): Actor[] {
  //   return this.actorData.getValue();
  // }

  // getActorById(id: string): Actor {
  //   return this.getActor().filter(item => item.id == id)[0];
  // }
}
