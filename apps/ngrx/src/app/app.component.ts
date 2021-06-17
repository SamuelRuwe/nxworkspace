import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from './books-list/books.service';
import { Store, select } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selector';
import { addBook, removeBook, retrievedBookList } from './state/books.actions';
import { Book } from './books-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // @ts-ignore
  books$ = this._store.pipe(select(selectBooks));
  // @ts-ignore
  bookCollection$ = this._store.pipe(select(selectBookCollection));

  onAdd(bookId: keyof Book) {
    this._store.dispatch(addBook({bookId}));
  }

  onRemove(bookId: keyof Book) {
    this._store.dispatch(removeBook({bookId}));
  }

  constructor(
    private _booksService: GoogleBooksService,
    private _store: Store
  ) {}

  ngOnInit() {
    this._booksService
      .getBooks()
      .subscribe((Book) => this._store.dispatch(retrievedBookList({Book})));
  }

}
