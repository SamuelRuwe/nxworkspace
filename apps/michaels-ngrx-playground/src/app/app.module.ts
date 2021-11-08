import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './state/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({ 
      counter: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
