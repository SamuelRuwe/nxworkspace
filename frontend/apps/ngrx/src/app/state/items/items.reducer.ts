import { deleteItemSuccess, itemsLoadedSuccess } from './items.action';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export interface ItemsState extends EntityState<{ id: number; name: string; }> {
  selectedItemId: number | null;
}

export const adapter: EntityAdapter<{ id: number; name: string; }> = createEntityAdapter<{ id: number; name: string; }>();

export const initialState: ItemsState = adapter.getInitialState({
  selectedItemId: null
});

export const itemsReducer = createReducer(
  initialState,
  on(
    itemsLoadedSuccess, (state, {items}) => {
      return adapter.setAll(items, state);
    }
  ),
  on(
    deleteItemSuccess, (state, { id }) => {
      return adapter.removeOne(id, state);
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getSelectedId = (state: ItemsState) => state.selectedItemId;
