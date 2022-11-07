import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMovieComponent } from './movie-library/about-movie/about-movie.component';
import { ActorDetailComponent } from './movie-library/actor-list/actor-detail/actor-detail.component';
import { ActorListComponent } from './movie-library/actor-list/actor-list.component';
import { MovieLibraryComponent } from './movie-library/movie-library.component';
import { MovieLibraryModule } from './movie-library/movie-library.module';
import { MovieDetailComponent } from './movie-library/movie-list/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-library/movie-list/movie-list.component';

const routes: Routes = [
  {path:"movie-list", component:MovieListComponent},
  {path:"actor-list", component:ActorListComponent},
  {path:"about-movie", component:AboutMovieComponent},
  {path:"actor-detail/:id", component:ActorDetailComponent},
  {path:"movie-detail/:id", component:MovieDetailComponent},
  {path:"", redirectTo:"movie-list", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
