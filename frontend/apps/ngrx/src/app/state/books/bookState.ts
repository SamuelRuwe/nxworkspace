import { Book } from '../../books/books-list/books.model';

export interface BookState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
