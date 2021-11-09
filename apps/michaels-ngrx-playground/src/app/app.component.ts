import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks, selectCollectionState } from './state/books.selectors';
import {
  addBook,
  removeBook,
  loadBooks,
} from './state/books.actions';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // books$ = this.store.select(selectBooks);
  books$ = this.store.select(state => state.books);
  bookCollection$ = this.store.select(selectBookCollection);
  collection$ = this.store.select(selectCollectionState)

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    // this.booksService
    //   .getBooks()
    //   .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
    this.store.dispatch(loadBooks())
  }
}