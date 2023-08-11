import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../common/movies';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'http://localhost:8080/api/movies';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Movies[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}
interface GetResponse {
  _embedded: {
    products: Movies[];
  }
}