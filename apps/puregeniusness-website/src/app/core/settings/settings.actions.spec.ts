import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeTheme
} from './settings.actions';
import { NIGHT_MODE_THEME } from './settings.model';

describe('Settings Actions', () => {
  it('should create ActionSettingsChangeTheme action', () => {
    const action = actionSettingsChangeTheme({
      theme: NIGHT_MODE_THEME
    });

    expect(action.type).toEqual(actionSettingsChangeTheme.type);
    expect(action.theme).toEqual(NIGHT_MODE_THEME);
  });

  it('should create ActionSettingsChangeAutoNightMode action', () => {
    const action = actionSettingsChangeAutoNightMode({
      autoNightMode: true
    });

    expect(action.type).toEqual(actionSettingsChangeAutoNightMode.type);
    expect(action.autoNightMode).toEqual(true);
  });

  it('should create ActionSettingsChangeHour action', () => {
    const action = actionSettingsChangeHour({
      hour: 7
    });

    expect(action.type).toEqual(actionSettingsChangeHour.type);
    expect(action.hour).toEqual(7);
  });
});
