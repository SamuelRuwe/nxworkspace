import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from '../state/books/books.selector';
import { Book } from './books-list/books.model';
import { addBook, removeBook, retrievedBookList } from '../state/books/books.actions';
import { GoogleBooksService } from './books-list/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$ = this._store.pipe(select(selectBooks));
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
