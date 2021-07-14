import { createAction, props } from '@ngrx/store';

export const appLoaded = createAction('[App Component] App Loaded');

export const itemsLoadedSuccess = createAction(
  '[App Component] Items Loaded Successfully',
  props<{ items: Array<{ id: number; name: string; }> }>()
);

export const deleteItem = createAction(
  '[Items Component] Delete Item',
  props<{ id: number; name: string; }>()
);

export const addItem = createAction(
  '[Items Component] Add Item',
  props<{ item: { id: number; name: string; } }>()
);

export const updateItem = createAction(
  '[Items Component] Update Item',
  props<{ item: { id: number; name: string; } }>()
);

export const getItem = createAction(
  '[Items Component] Get Item',
  props<{ itemId: number }>()
);

export const itemActions = {
  deleteItem,
  addItem,
  updateItem,
  getItem
}

export const deleteItemSuccess = createAction(
  '[API DeleteItem] Delete Item Successful',
  props<{ id: number; }>()
);

/**
 * Good Action Hygiene
 *
 * Actions should capture unique events. This means that if an event is unique between two components
 * then it should dispatch separate actions
 *
 * Don't use Generic Action Types
 *
 * ofType can have multiple action types within. Use this to send actions to the same effects or reducer
 * ofType('[Type] Do thing]', '[Type2] Do thing')
 *
 * [Source] Event
 * Suffix source with API if it's coming from the backend
 * Suffix with component if it's coming from a component
 * You should be able to tell where an action comes from a year later
 *
 * Avoid nested conditionals in reducers and effects by not subtyping actions
 * Constrain action types to be narrow
 *
 * Multiple action types can cause the same effect to start
 *
 * Focus on clarity above brevity. Be very explicit with your actions and how side effects start
 *
 * Write actions first
 *
 * Divide actions based on event source
 * User Actions | Backend Actions | Device Actions
 *
 */
