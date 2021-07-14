import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from './items.reducer';
import { selectEntities, selectIds, selectTotal } from './items.reducer';


export const selectItemsState = createFeatureSelector<fromItems.ItemsState>('items');

export const selectItemsIds = createSelector(
  selectItemsState,
  selectIds
);

export const selectItemEntities = createSelector(
  selectItemsState,
  selectEntities
);

export const selectItemsTotal = createSelector(
  selectItemsState,
  selectTotal
);
