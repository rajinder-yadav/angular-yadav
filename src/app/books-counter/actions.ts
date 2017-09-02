import { BooksCounterModel } from '../app.states';

export const GET_BOOKS_COUNT = 'GET_BOOKS_COUNT';

export function doGetBooksCount(count: BooksCounterModel) {
  return {
    type: GET_BOOKS_COUNT,
    payload: count
  };
}
