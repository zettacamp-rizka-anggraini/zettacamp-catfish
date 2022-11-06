import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieLibraryComponent } from './movie-library.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { AboutMovieComponent } from './about-movie/about-movie.component';



@NgModule({
  declarations: [
    MovieLibraryComponent,
    MovieListComponent,
    ActorListComponent,
    AboutMovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieLibraryModule { }
