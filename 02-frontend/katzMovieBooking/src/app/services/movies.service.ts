import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../common/movies';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieCategory } from '../common/movie-category';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseMovieUrl = 'http://localhost:8080/api/movies?page=0&size=200';
  private baseCategoryUrl = 'http://localhost:8080/api/categories';

  constructor(private httpClient: HttpClient) {
    console.log(this.baseMovieUrl);
  }

  getMoviesList(theCategoryId:number): Observable<Movies[]> {
    return this.httpClient.get<GetMovieResponse>(this.baseMovieUrl).pipe(
      map(response => response._embedded.movies)
    );
  }
  getMoviesCategoryList(): Observable<any> {

    console.log(this.baseCategoryUrl);
    return this.httpClient.get(this.baseCategoryUrl);
  }
}
interface GetMovieResponse {
  _embedded: {
    movies: Movies[];
  }
}
interface GetMovieCategoryResponse {
  _embedded: {
    category: MovieCategory[];
  }
}