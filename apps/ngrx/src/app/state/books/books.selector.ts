import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './bookState';
import { Book } from '../../books/books-list/books.model';

export const selectBooks = createSelector(
  (state: any) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<BookState,
  ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks as any,
  selectCollectionState as any,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
