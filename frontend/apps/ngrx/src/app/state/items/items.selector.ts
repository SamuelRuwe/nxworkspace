import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

export const selectItems = createSelector(
  (state: AppState) => state.items,
  (items: Array<{ id: number, name: string }>) => items
);
