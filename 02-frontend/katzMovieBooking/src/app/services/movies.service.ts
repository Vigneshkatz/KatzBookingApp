import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../common/movies';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'http://localhost:8080/api/movies?page=0&size=200';


  constructor(private httpClient: HttpClient) {
    console.log(this.baseUrl);
  }

  getMoviesList(): Observable<Movies[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.movies)
    );
  }
}
interface GetResponse {
  _embedded: {
    movies: Movies[];
  }
}