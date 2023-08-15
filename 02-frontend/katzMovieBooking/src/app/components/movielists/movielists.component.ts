import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  page: number = 1;
  currentCategoryId : number = 1;

  constructor(private movieService: MoviesService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
        this.listMovies();
    });
    // this.listMovies();
  }

  listMovies() {
    // check for id
    const hasCategoryId : boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId)
    {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else{
      this.currentCategoryId = 1;
    }
    this.movieService.getMoviesList(this.currentCategoryId).subscribe(
      data => {
        console.log(data);
        this.movies = data;
      }
    )
  }

}