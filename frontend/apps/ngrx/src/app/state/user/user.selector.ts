import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectAllUsers = createSelector(
  selectUserState,
  (userState => userState.users)
);
