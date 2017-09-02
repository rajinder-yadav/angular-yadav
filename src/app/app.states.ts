// Global Store states
export interface Action {
  type: string,
  payload: any;
}

export interface BookModel {
  id: number;
  title: string;
  author: string;
}

export interface BooksCounterModel {
  count: number;
}

export interface AppState {
  books: BookModel[];
  booksCounter: BooksCounterModel;
}
