import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/common/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movielists',
  templateUrl: 'movielists.component-gallery.html',
  styleUrls: ['./movielists.component.css'
              ]
})
export class MovielistsComponent implements OnInit {

  movies: Movies[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.listMovies();
  }

  listMovies() {
    this.movieService.getMoviesList().subscribe(
      data => {
        console.log(data);
        this.movies = data;
      }
    )
  }

}