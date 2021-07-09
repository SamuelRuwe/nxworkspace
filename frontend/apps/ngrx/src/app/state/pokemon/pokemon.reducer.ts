import { Pokemon } from './pokemon.model';
import { PokemonActionTypes } from './pokemon.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface PokemonState extends EntityState<Pokemon> {
  selectedPokemonId: string | null;
}

export const adapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>();

export const initialState: PokemonState = adapter.getInitialState({
  selectedPokemonId: null
});

/**
 * Reducer always takes state and always returns state
 * Delegate to a stand alone function to improve testability
 *
 * Note that the payload is NOT always the same object nor type of object
 * In the case of select, the payload is a string in this example.
 * In the other cases, the payload is a Pokemon object.
 */
export function pokemonReducer(state = initialState, action: any): PokemonState {
  switch (action.type) {
    case PokemonActionTypes.SelectPokemon:
      return Object.assign({}, state, {selectedPokemonId: action.payload.id});
    case PokemonActionTypes.CreatePokemon:
      return adapter.addOne(action.payload, state);
    case PokemonActionTypes.PokemonLoaded:
      return adapter.addMany(action.payload, state);
    case PokemonActionTypes.UpdatePokemon:
      return adapter.updateOne({id: action.payload.id, changes: action.payload}, state);
    case PokemonActionTypes.DeletePokemon:
      return adapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}

export const getSelectedPokemonId = (state: PokemonState) => state.selectedPokemonId;

const {selectIds, selectEntities, selectAll} = adapter.getSelectors();

export const selectPokemonIds = selectIds;
export const selectPokemonEntities = selectEntities;
export const selectAllPokemon = selectAll;



/**
 * Original way this without Entity
 */
// export interface PokemonState {
//   pokemon: Pokemon[];
//   selectedPokemonId: string | null;
// }



/**
 * Original initialState without Entity
 */
// export const initialState: PokemonState = {
//   pokemon: initialPokemon,
//   selectedPokemonId: null
// }



/**
 *
 * We want to keep these method immutable as they are reducer methods.
 * To do this, we cannot call push on an array as it would be mutating the array.
 * We can call array.concat(newItem) or we can use the shorthand of this [...array, newItem]
 *
 * Map does the same thing as it returns a new array. We don't modify an existing object
 * when we change the updated object, we Object assign it to create a new object.
 *
 * Filter returns a new array except elements that failed the boolean check. This
 * keeps the array immutable when we delete this way.
 *
 */

// const createPokemon = (pokemon: Pokemon[], newPokemon: Pokemon) => [...pokemon, newPokemon];
// const updatePokemon = (pokemon: Pokemon[], updatedPokemon: Pokemon) => pokemon.map(p => {
//   return p.id === updatedPokemon.id ? Object.assign({}, updatedPokemon) : p;
// });
// const deletePokemon = (pokemon: Pokemon[], pokemonToDelete: Pokemon) => pokemon.filter(p => {
//   return p.id !== pokemonToDelete.id;
// });
