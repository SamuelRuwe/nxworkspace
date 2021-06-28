import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state';
import { PokemonState } from '../state/pokemon/pokemon.reducer';
import { map } from 'rxjs/operators';
import { Pokemon } from '../state/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  pokemon$: Observable<Pokemon[]>;

  constructor(private _store: Store<AppState>) {
    this.pokemon$ = _store.pipe(
      select('pokemon'),
      map((pokemonState: PokemonState) => pokemonState.pokemon)
    );
  }

}
