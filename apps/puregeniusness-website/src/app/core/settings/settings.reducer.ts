import { Action, createReducer, on } from '@ngrx/store';
import { actionSettingsChangeTheme } from './settings.actions';
import { SettingsState } from './settings.model';

export const initialState: SettingsState = {
  theme: 'DEFAULT-THEME'
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    (state, action) => ({ ...state, ...action })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action) {
  return reducer(state, action);
}
