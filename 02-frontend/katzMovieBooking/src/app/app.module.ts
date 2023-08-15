import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MovielistsComponent } from './components/movielists/movielists.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistsComponent,
    MovieCategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
