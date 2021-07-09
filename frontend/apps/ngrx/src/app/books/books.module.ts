import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BooksRoutingModule } from './books-routing.module';


@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule {}
