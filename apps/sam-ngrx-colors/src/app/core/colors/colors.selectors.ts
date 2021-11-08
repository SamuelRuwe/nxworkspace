import { createSelector } from '@ngrx/store';
import { selectColorsState } from '../core.state';

export const selectCurrentColor = createSelector(
  selectColorsState,
  (state => state.colors[state.color])
);
