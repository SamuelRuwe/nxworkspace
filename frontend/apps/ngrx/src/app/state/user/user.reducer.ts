import { UserModel } from './user.models';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  users: Array<UserModel>;
}

export const initialState: UserState = {
  users: []
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadAllSuccess, (state, {users}) => ({...state, users})),
  on(UserActions.createUserSuccess, (state, {user}) => {
    const users = state.users.map(user => user);
    users.push(user);
    return ({...state, users});
  }),
  on(UserActions.editUserSuccess, (state, {user}) => {
    const users = state.users.map(currentUser => user.id == currentUser.id ? user : currentUser);
    return ({...state, users});
  }),
  on(UserActions.deleteUserSuccess, (state, {id}) => {
    const users = state.users.filter(user => user.id != id);
    return ({...state, users});
  })
);
