import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovielistsComponent } from './compomnents/movielists/movielists.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
