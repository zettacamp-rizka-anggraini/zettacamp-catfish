import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-library',
  templateUrl: './movie-library.component.html',
  styleUrls: ['./movie-library.component.css']
})
export class MovieLibraryComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
