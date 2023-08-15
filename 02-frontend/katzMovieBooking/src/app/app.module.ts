import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MovielistsComponent } from './components/movielists/movielists.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'categories/:id', component: MovieCategoryComponent},
  { path: 'categories', component: MovieCategoryComponent },
  { path: 'movies', component: MovieCategoryComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies', pathMatch: 'full' },

]
@NgModule({
  declarations: [
    AppComponent,
    MovielistsComponent,
    MovieCategoryComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
