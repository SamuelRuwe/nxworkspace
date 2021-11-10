import { AppState } from '../core.state';

export const NIGHT_MODE_THEME = 'DARK-THEME';

export interface SettingsState {
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  hour: number;
}

export interface State extends AppState {
  settings: SettingsState;
}
