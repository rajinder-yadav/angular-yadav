import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BooksReducer } from './books-list/reducers';
import { BooksCountReducer } from './books-counter/reducers';
import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { BooksCounterComponent } from './books-counter/books-counter.component';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksCounterComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      books: BooksReducer,
      booksCounter: BooksCountReducer
    })
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
