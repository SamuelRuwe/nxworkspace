import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks, selectCollectionState } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  collection$ = this.store.select(selectCollectionState)

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}