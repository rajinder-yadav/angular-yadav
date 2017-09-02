# Books - Redux with NGRX

How to create an Angular 4 web application using the Redux data model with NGRX store.

Here are suggested guidance.

* Colocate Action creators and Reducers with their components.
* Place all Actions in a file called `actions.ts` is the same folder as the component.
* Place all Reducer in a file called `reducers.ts` is the same folder as the component.
* Action creator and Reducer should not perform an API calls, or fetch data, this is the role of a Service.
* Define all the application states in a single file `app.states.ts`, this is the global Store state.

## Items of interest

* books-counter.component.ts
* books-list.component.ts
* actions.ts
* reducers.ts
* app.states.ts
* app.module.ts
* books.services.ts

### Action: load-books.action.ts

How to create an _Action_ object. The example below show use of a payload.

We define the action _type_ as a constant, this does two things.

1. Lets TypeScript catch typos, since a string literal typoe would go unnoticed.
1. Allow action _type_ to be renamed from a single place.

As a convention it is good coding practice to prefix an action creator with 'do'.

When an application starts, in will need to initialize the Store with states.

```js
import { BookModel } from '../app.states';

export const LOAD_BOOKS = 'LOAD_BOOKS';

export function doLoadBooks(bookList: BookModel[]) {
  return {
    type: LOAD_BOOKS,
    payload: bookList
  };
}
```

An Action **must** never perform service, API calls or fetch data, it should be passed the data as a payload.

### Reducer: load-books.reducer.ts

How to write a _Reducer_ function. Its job is to listen for _actions_ and return a new _state_.

1. Reducer is a pure function.
1. State **must** be immutable.
1. Reducer function takes a `state` and `action` object, returns a new state.
1. Reducer **must** not make service, API calls to fetch data, should be available in the Action payload field.

```js
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
```

Since the NGRX Store state will be _undefined_ when the application starts. It is very important to initialize the Store with a default state value.

For an unknown _action_ return the _state_ object.

### Data model

* store.app.state.ts

NGRX Action only defines a _type_ field, we also need a _payload_ field. Let us define our own Action type.

```js
export interface Action {
  type: string,
  payload: any;
}
```

Make sure to understand the shape of the application state, then decompose the state into sub-states as they will be consumed by components and services.

```js
export interface BookModel {
  id: number;
  title: string;
  author: string;
}

export interface BooksCounterModel {
  count: number;
}
```

The entire application state is made from individual states. This is the global Store state.

```js
export interface AppState {
  books: BookModel[];
  booksCounter: BooksCounterModel;
}
```

### Store registration

Application NgModule showing how to register _Reducers_ with the NGRX Store.

Here we combine all the application reducers and register them with the Store.

```js
imports: [
  BrowserModule,
  StoreModule.forRoot({
    books: BooksReducer,
    booksCounter: BooksCountReducer
  })
],
```

### Reading State and Dispatching an Action

Components showing how to read state from the Store and dispatch a message to update state.

* BooksList component
* BooksCounter component

The keys 'books' and 'booksCounter' defined in `app.module.ts` are used to fetch the sub-state from the Store inside a Component. What gets returned is an Observable.

```js
constructor(private store: Store<AppState>, private bookService: BooksService) {
  this.books$ = store.select('books');
}
```

Example of sending an action to initialize the Store state.

```js
ngOnInit() {
  // Initialize Store
  const booksList = this.bookService.getBooks();
  this.store.dispatch(doLoadBooks(booksList));
}
```

This is the basics for setting up and using NGRX to develope an application using the Redux data model.
