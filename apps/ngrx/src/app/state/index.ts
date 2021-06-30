import * as fromPokemon from './pokemon/pokemon.reducer';
import * as fromCounter from './counter/counter.reducer';
import * as fromBooks from './books/books.reducer';
import * as fromCollection from './books/collection.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
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

/**
 * Pokemon Selectors
 */
export const selectPokemonState = createFeatureSelector<fromPokemon.PokemonState>('pokemon');

export const selectPokemonIds = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonIds
);

export const selectPokemonEntities = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonEntities
);

export const selectAllPokemon = createSelector(
  selectPokemonState,
  fromPokemon.selectAllPokemon
);

export const selectCurrentPokemonId = createSelector(
  selectPokemonState,
  fromPokemon.getSelectedPokemonId
);

export const selectCurrentPokemon = createSelector(
  selectPokemonEntities,
  selectCurrentPokemonId,
  (pokemonEntities, pokemonId) => {
    if (pokemonId) {
      return pokemonEntities[pokemonId]
    }
    return null;
  }
);
