import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'nx-workspace-book-collection',
  templateUrl: './book-collection.component.html',
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book | undefined> | null = [];
  @Output() remove = new EventEmitter<string>();
}