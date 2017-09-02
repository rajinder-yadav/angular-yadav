import { BookModel, Action } from '../app.states';
import { LOAD_BOOKS } from './actions';

export function BooksReducer(state: BookModel[] = [], action: Action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
