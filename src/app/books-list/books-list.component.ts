import { BooksService } from '../books.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { doLoadBooks } from './actions';
import { AppState, BookModel } from '../app.states';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books$: Observable<BookModel[]>;

  constructor(private store: Store<AppState>, private bookService: BooksService) {
    this.books$ = store.select('books');
  }

  ngOnInit() {
    // Initialize Store
    const booksList = this.bookService.getBooks();
    this.store.dispatch(doLoadBooks(booksList));
  }
}
