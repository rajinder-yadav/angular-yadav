import { Injectable } from '@angular/core';

const books = [
  { id: 1, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams'},
  { id: 2, title: 'A Journey to the Center of the Earth', author: 'Jules Verne' },
  { id: 3, title: 'The War of the Worlds', author: 'H.G. Wells'  }
];

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return books;
  }

  getBooksCount() {
    return { count: books.length };
  }
}
