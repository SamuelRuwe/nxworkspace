import { Injectable, NgZone } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State } from './settings.model';
import { select, Store } from '@ngrx/store';
import { OverlayContainer } from '@angular/cdk/overlay';
import { merge, of, tap, withLatestFrom } from 'rxjs';
import { actionSettingsChangeHour, actionSettingsChangeTheme } from './settings.actions';
import { selectEffectiveTheme } from './settings.selectors';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('init-effect-trigger');

@Injectable()
export class SettingsEffects {
  hour = 0;

  changeHour = this.ngZone.runOutsideAngular(() =>
    setInterval(() => {
      const hour = new Date().getHours();
      if (hour !== this.hour) {
        this.hour = hour;
        this.ngZone.run(() =>
          this.store.dispatch(actionSettingsChangeHour({ hour }))
        );
      }
    }, 60_000)
  );

  updateTheme = createEffect(
    () =>
      merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
        withLatestFrom(this.store.pipe(select(selectEffectiveTheme))),
        tap(([action, effectiveTheme]) => {
          const classList =
            this.overlayContainer.getContainerElement().classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private ngZone: NgZone
  ) {}
}
