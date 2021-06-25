import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { booksReducer } from './state/books/books.reducer';
import { collectionReducer } from './state/books/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@nx-workspace/layout';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({count: counterReducer, books: booksReducer, collection: collectionReducer}),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
