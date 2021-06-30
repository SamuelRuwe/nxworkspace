import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState, selectAllPokemon, selectCurrentPokemon } from '../state';
import { PokemonState } from '../state/pokemon/pokemon.reducer';
import { map } from 'rxjs/operators';
import { Pokemon } from '../state/pokemon/pokemon.model';
import {
  CreatePokemon,
  DeletePokemon,
  LoadPokemon,
  SelectPokemon,
  UpdatePokemon
} from '../state/pokemon/pokemon.actions';

const emptyPokemon: Pokemon = {
  id: '4',
  name: 'Squirtle'
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon$: Observable<any[]>;
  selectedPokemon$: Observable<Pokemon | null | undefined>;

  constructor(private _store: Store<AppState>) {

    /**
     * We use selectors so that we don't have to do any logic and our
     * data is already in the shape we want when it arrives in the component.
     */
    this.pokemon$ = _store.pipe(select(selectAllPokemon));
    this.selectedPokemon$ = _store.pipe(select(selectCurrentPokemon));
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  selectPokemon(pokemon: Pokemon) {
    this._store.dispatch(new SelectPokemon(pokemon));
  }

  resetPokemon() {
    this._store.dispatch(new SelectPokemon(null));
  }

  savePokemon(pokemon: Pokemon) {
    if (!pokemon.id) {
      this.createPokemon(pokemon);
    } else {
      this.updatePokemon(pokemon);
    }
  }

  createPokemon(pokemon: Pokemon) {
    this._store.dispatch(new CreatePokemon(pokemon));
  }

  /**
   * Not sure why this one isn't updating correctly.
   * The other failure was due to the ID, but this one doesn't appear to be
   */
  updatePokemon(pokemon: Pokemon) {
    const newPokemon = {id: '3', name: 'Charizard'};
    this._store.dispatch(new UpdatePokemon(newPokemon));
  }

  /**
   * ToDo
   * This method has to use the id for the object to work, otherwise it won't remove anything
   */
  deletePokemon(pokemon: Pokemon) {
    console.log('Delete pokemon called');
    this._store.dispatch(new DeletePokemon(pokemon));
  }

  getPokemon() {
    this._store.dispatch(new LoadPokemon());
  }

}
