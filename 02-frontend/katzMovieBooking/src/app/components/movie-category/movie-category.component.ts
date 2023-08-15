import { MoviesService } from 'src/app/services/movies.service';
import { MovieCategory } from './../../common/movie-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css']
})
export class MovieCategoryComponent implements OnInit {
  movieCategory: any;
  
  constructor(private movieService: MoviesService) { }
  
  ngOnInit() {
    console.log("calling method");
    this.getMoviesCategoryList();
  }
  getMoviesCategoryList() : void{
    console.log("inside method");
    this.movieService.getMoviesCategoryList().subscribe(
      (data) => {
        this.movieCategory = data._embedded.categories;
        data._embedded.categories.forEach((category : MovieCategory) => {
          console.log('Product id=' + category.id);
          console.log('Product Category=' + category.categoryName);
        });

        
      }
    );
  }
}
