import { Action } from '@ngrx/store';
import { Pokemon } from './pokemon.model';

/**
 * Events that get called and completion events
 */
export enum PokemonActionTypes {
  SelectPokemon = '[Pokemon] Selected',
  CreatePokemon = '[Pokemon] Create Pokemon',
  PokemonCreated = '[Pokemon] Pokemon Created',
  UpdatePokemon = '[Pokemon] Update Pokemon',
  DeletePokemon = '[Pokemon] Delete Pokemon',
  LoadPokemon = '[Pokemon] Load Pokemon',
  PokemonLoaded = '[Pokemon] Pokemon Loaded'
}

export class SelectPokemon implements Action {
  readonly type = PokemonActionTypes.SelectPokemon;

  constructor(public payload: Pokemon | null) {}
}

export class CreatePokemon implements Action {
  readonly type = PokemonActionTypes.CreatePokemon;

  constructor(public payload: Pokemon) {}
}

export class PokemonCreated implements Action {
  readonly type = PokemonActionTypes.PokemonCreated;
  constructor(public payload: Pokemon) {}
}

export class UpdatePokemon implements Action {
  readonly type = PokemonActionTypes.UpdatePokemon;

  constructor(public payload: Pokemon) {}
}

export class DeletePokemon implements Action {
  readonly type = PokemonActionTypes.DeletePokemon;

  constructor(public payload: Pokemon) {}
}

/**
 * Does not have a payload as it is just a trigger event
 */
export class LoadPokemon implements Action {
  readonly type = PokemonActionTypes.LoadPokemon;
}

export class PokemonLoaded implements Action {
  readonly type = PokemonActionTypes.PokemonLoaded;

  constructor(private payload: Pokemon[]) {}
}

/**
 * ToDo
 * Switch to createAction call instead of class based
 */

export type PokemonActions = SelectPokemon
  | CreatePokemon
  | PokemonCreated
  | UpdatePokemon
  | DeletePokemon
  | LoadPokemon
  | PokemonLoaded
  ;

/**
 * ToDo
 * Add Pokemon Added class
 * Pokemon Deleted class
 * etc
 */
