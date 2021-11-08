import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'nx-workspace-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> | null = [];
  @Output() add = new EventEmitter<string>();
}