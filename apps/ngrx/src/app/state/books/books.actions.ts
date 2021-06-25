import { createAction, props } from '@ngrx/store';
import { Book } from '../../books/books-list/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: keyof Book }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: keyof Book }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<any>()
);
