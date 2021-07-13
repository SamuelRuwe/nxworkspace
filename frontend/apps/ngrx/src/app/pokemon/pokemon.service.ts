import { Injectable } from '@angular/core';
import { Pokemon } from '../state/pokemon/pokemon.model';
import { of } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  loadPokemon() {
    return of(initialPokemon);
  }

  addPokemon(pokemon: Pokemon) {
    console.log('added pokemon');
    return of(pokemon);
  }

}
