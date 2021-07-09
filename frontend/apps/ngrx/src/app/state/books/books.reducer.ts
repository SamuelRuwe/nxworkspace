import { Book } from '../../books/books-list/books.model';
import { createReducer, on } from '@ngrx/store';
import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, {Book}) => [...Book])
);
