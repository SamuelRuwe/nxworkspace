import { deleteItemSuccess, itemsLoadedSuccess } from './items.action';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<{ id: number, name: string }> = [];

export const itemsReducer = createReducer(
  initialState,
  on(
    itemsLoadedSuccess,
    (state, {items}) => [...items]
  ),
  on(
    deleteItemSuccess,
    (state) => [...state]
  )
);
