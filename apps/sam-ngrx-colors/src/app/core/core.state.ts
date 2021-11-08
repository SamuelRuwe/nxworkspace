import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ColorsState } from './colors/colors.model';
import { colorsReducer } from './colors/colors.reducer';

export const reducers: ActionReducerMap<AppState> = {
  colors: colorsReducer
}

export interface AppState {
  colors: ColorsState;
}

export const selectColorsState = createFeatureSelector<AppState, ColorsState>(
  'colors'
);
