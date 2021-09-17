import { User } from './user.models';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  selectedUserID: number | undefined;
  users: Array<User>;
}

export const initialState: UserState = {
  selectedUserID: undefined,
  users: []
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadAllSuccess, (state, {users}) => ({...state, users}))
);
