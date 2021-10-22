import * as fromCounter from './counter/counter.reducer';
import * as fromUser from './user/user.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { UserEffects } from './user/user.effects';

export interface AppState {
  count: fromCounter.CounterState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  count: fromCounter.counterReducer,
  user: fromUser.userReducer
}

export const effects = [
  UserEffects
];
