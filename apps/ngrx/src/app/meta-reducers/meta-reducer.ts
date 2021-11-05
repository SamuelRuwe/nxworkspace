import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../state';

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state, action) {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (<any>action).payload,
      oldState: state,
      newState
    });
    return newState;
  }
}

export const metaReducers: MetaReducer<AppState>[] = [debug];
