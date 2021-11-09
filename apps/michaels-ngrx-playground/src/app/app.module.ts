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
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './state/books.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CollectionEffects } from './state/collection.effects';

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
    HttpClientModule,
    EffectsModule.forRoot([BooksEffects, CollectionEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
