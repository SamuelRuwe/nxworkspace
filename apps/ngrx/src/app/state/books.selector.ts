import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Book } from '../books-list/books.model';

export const selectBooks = createSelector(
  (state: any) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<AppState,
  ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks as any,
  selectCollectionState as any,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
