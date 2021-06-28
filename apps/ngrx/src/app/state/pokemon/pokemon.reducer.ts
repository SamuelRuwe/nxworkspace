import { Pokemon } from './pokemon.model';

const initialPokemon: Pokemon[] = [
  {
    id: '1',
    name: 'Bulbasaur'
  },
  {
    id: '2',
    name: 'Ivysaur'
  },
  {
    id: '3',
    name: 'Venasaur'
  }
];

export interface PokemonState {
  pokemon: Pokemon[];
  selectedPokemonId: string | null;
}

export const initialState: PokemonState = {
  pokemon: initialPokemon,
  selectedPokemonId: null
}

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

const createPokemon = (pokemon: Pokemon[], newPokemon: Pokemon) => [...pokemon, newPokemon];
const updatePokemon = (pokemon: Pokemon[], updatedPokemon: Pokemon) => pokemon.map(p => {
  return p.id === updatedPokemon.id ? Object.assign({}, updatedPokemon) : p;
});
const deletePokemon = (pokemon: Pokemon[], pokemonToDelete: Pokemon) => pokemon.filter(p => {
  return p.id !== pokemonToDelete.id;
});

/**
 * @param state
 * @param action
 * Reducer always takes state and always returns state
 * Delegate to a stand alone function to improve testability
 *
 * Note that the payload is NOT always the same object nor type of object
 * In the case of select, the payload is a string in this example.
 * In the other cases, the payload is a Pokemon object.
 */
export function pokemonReducer(state = initialState, action: any): PokemonState {
  switch (action.type) {
    case 'select':
      return {
        selectedPokemonId: action.payload,
        pokemon: state.pokemon
      }
    case 'create':
      return {
        selectedPokemonId: state.selectedPokemonId,
        pokemon: createPokemon(state.pokemon, action.payload)
      }
    case 'update':
      return {
        selectedPokemonId: state.selectedPokemonId,
        pokemon: updatePokemon(state.pokemon, action.payload)
      }
    case 'delete':
      return {
        selectedPokemonId: state.selectedPokemonId,
        pokemon: deletePokemon(state.pokemon, action.payload)
      }
    default:
      return state;
  }
}
