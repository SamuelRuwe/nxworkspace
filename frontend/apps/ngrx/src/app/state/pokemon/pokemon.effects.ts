import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { PokemonState } from './pokemon.reducer';
import { CreatePokemon, LoadPokemon, PokemonActionTypes, PokemonCreated, PokemonLoaded } from './pokemon.actions';
import { PokemonService } from '../../pokemon/pokemon.service';
import { map } from 'rxjs/operators';

/**
 * Using the dataPersistence API allows us to use
 * pessimisticUpdate (wait for the server to update before passing to the reducer)
 * and optimisticUpdate (pass to reducer before server is updated)
 *
 * Reducer/Store for State management
 * Effects are for flow of control
 *
 * Effects can be chained in the event they need to be sequenced
 *
 */

@Injectable({providedIn: 'root'})
export class PokemonEffects {

  /**
   * Takes call to load data, gets the response from the service, returns a new action with the data
   */
  loadPokemon$ = createEffect(() => {
    return this.dataPersistence.fetch(PokemonActionTypes.LoadPokemon, {
      run: (action: LoadPokemon, state: PokemonState) => {
        console.log('Load pokemon called');
        return this.pokemonService.loadPokemon().pipe(map(res => new PokemonLoaded(res)));
      },
      onError: (action: LoadPokemon, error: string) => {
        console.error('Error ', error);
      }
    });
  });

  addPokemon$ = createEffect(() => {
    return this.dataPersistence.fetch(PokemonActionTypes.CreatePokemon, {
      run: (action: CreatePokemon, state: PokemonState) => {
        console.log('Create pokemon called');
        return this.pokemonService.addPokemon(action.payload)
          .pipe(map(res => new PokemonCreated(res)));
      },
      onError: (action: CreatePokemon, error: string) => {
        console.error('Error ', error);
      }
    });
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PokemonState>,
    private pokemonService: PokemonService
  ) {}
}
