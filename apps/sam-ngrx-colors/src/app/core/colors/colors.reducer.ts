import { ColorsState, DEFAULT_COLORS } from './colors.model';
import { createReducer, on } from '@ngrx/store';
import { actionColorNextColor } from './colors.actions';

export const initialState: ColorsState = {
  color: 0,
  colors: DEFAULT_COLORS
}

export const colorsReducer = createReducer(
  initialState,
  on(actionColorNextColor, (state, action) => {
    if (state.color + 1 === state.colors.length) {
      return { ...state, color: 0 };
    }
    return { ...state, color: state.color + 1 }
  })
);
