import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../state/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  selectedPokemon = {id: '', name: ''};

  @Output() saved = new EventEmitter();

  onSave(pokemon: Pokemon) {
    this.saved.emit(pokemon);
    this.selectedPokemon = {id: '', name: ''};
  }

}

/**
 * ToDo
 * Add a way to input a pokemon to edit
 */
