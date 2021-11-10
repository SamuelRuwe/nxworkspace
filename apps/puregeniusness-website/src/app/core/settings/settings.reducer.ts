import { Action, createReducer, on } from '@ngrx/store';
import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeTheme
} from './settings.actions';
import { NIGHT_MODE_THEME, SettingsState } from './settings.model';

export const initialState: SettingsState = {
  theme: 'DEFAULT-THEME',
  autoNightMode: false,
  nightTheme: NIGHT_MODE_THEME,
  hour: 0
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    actionSettingsChangeAutoNightMode,
    actionSettingsChangeHour,
    (state, action) => ({ ...state, ...action })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action) {
  return reducer(state, action);
}
