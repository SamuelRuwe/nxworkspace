import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/books.service';
import { retrievedBookList } from './books.actions';

@Injectable()
export class BooksEffects {

    loadBooks$ = createEffect(() => this.actions$.pipe(
        ofType('[Book List] Load Books'),
        mergeMap(() => this.booksService.getBooks()
            .pipe(
                map(books => retrievedBookList({ books })),
                catchError(() => of({ type: '[Book List/API] Books Loaded Error' }))
            )
        ),
    ));

    constructor(
        private actions$: Actions,
        private booksService: GoogleBooksService
    ) {}
}
