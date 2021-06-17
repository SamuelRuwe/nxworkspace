import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { BooksListComponent } from './books-list/books-list.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, BooksListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    StoreModule.forRoot({count: counterReducer, books: booksReducer, collection: collectionReducer})
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
