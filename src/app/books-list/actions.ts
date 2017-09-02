import { BookModel } from '../app.states';

export const LOAD_BOOKS = 'LOAD_BOOKS';

export function doLoadBooks(bookList: BookModel[]) {
  return {
    type: LOAD_BOOKS,
    payload: bookList
  };
}
