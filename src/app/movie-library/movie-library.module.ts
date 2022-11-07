import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieLibraryComponent } from './movie-library.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { AboutMovieComponent } from './about-movie/about-movie.component';
import { RouterModule} from '@angular/router';

//Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { ActorCardComponent } from './actor-list/actor-card/actor-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ActorDetailComponent } from './actor-list/actor-detail/actor-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MovieLibraryComponent,
    MovieListComponent,
    ActorListComponent,
    AboutMovieComponent,
    MovieCardComponent,
    ActorCardComponent,
    ActorDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //Angular Material
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [
    MovieListComponent,
    ActorListComponent,
    AboutMovieComponent,
    MovieLibraryComponent,
    ActorDetailComponent,
  ]
})
export class MovieLibraryModule { }
