import * as fromPokemon from './pokemon/pokemon.reducer';
import * as fromCounter from './counter/counter.reducer';
import * as fromBooks from './books/books.reducer';
import * as fromCollection from './books/collection.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { Book } from '../books/books-list/books.model';

// Updated shape of entire application state
export interface AppState {
  count: number;
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  pokemon: fromPokemon.PokemonState;
}

// Add feature reducers into combined reducer
export const reducers: ActionReducerMap<AppState> = {
  count: fromCounter.counterReducer,
  books: fromBooks.booksReducer,
  collection: fromCollection.collectionReducer,
  pokemon: fromPokemon.pokemonReducer
}
