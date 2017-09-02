import { GET_BOOKS_COUNT } from './actions';
import { BooksCounterModel, Action } from '../app.states';

const InitalState = { count: 0 };

export function BooksCountReducer(state: BooksCounterModel = InitalState, action: Action) {
  switch (action.type) {
    case GET_BOOKS_COUNT:
      return action.payload;
    default:
      return state;
  }
}
