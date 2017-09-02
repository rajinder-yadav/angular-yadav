import { BooksService } from '../books.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { doGetBooksCount } from './actions';
import { AppState, BooksCounterModel } from '../app.states';

@Component({
  selector: 'books-counter',
  templateUrl: './books-counter.component.html',
  styleUrls: ['./books-counter.component.scss']
})
export class BooksCounterComponent implements OnInit {

  booksCounter$: Observable<BooksCounterModel>;

  constructor(private store: Store<AppState>, private booksService: BooksService) {
    this.booksCounter$ = store.select('booksCounter');
  }

  ngOnInit() {
    // Initialize Store
    const count = this.booksService.getBooksCount();
    this.store.dispatch(doGetBooksCount(count));
  }

}
