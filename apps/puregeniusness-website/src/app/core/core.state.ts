import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { debug } from './meta-reducers/debug.reducer';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer
};

export const selectSettingsState = createFeatureSelector<AppState,
  SettingsState>('settings');

export interface AppState {
  settings: SettingsState;
}

export const metaReducers: Array<MetaReducer<AppState>> = [];

if (!environment.production) {
  metaReducers.unshift(debug);
}
