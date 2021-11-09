import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { addBook } from './books.actions';
import { selectCollectionState } from './books.selectors';

@Injectable() 
export class CollectionEffects {
  addBookToCollectionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addBook),
        concatLatestFrom(action => this.store.select(selectCollectionState)),
        tap(([action, bookCollection]) => {
          if (bookCollection.length === 1) {
            window.alert('Congrats on adding your first book!');
          } else {
            window.alert('You have added book number ' + bookCollection.length);
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}