import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../common/movies';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'http://localhost:8080/api/movies';
  

  constructor(private httpClient: HttpClient) { 
    console.log(this.baseUrl);
  }

  getProductList(): Observable<Movies[]> {
   
   return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    tap(response => console.log('API Response:', response)),
    map(response => response._embedded.products),
    tap(products => console.log('Mapped Products:', products))
  );
}
}
interface GetResponse {
  _embedded: {
    products: Movies[];
  }
}