import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State } from './settings.model';
import { Store } from '@ngrx/store';
import { OverlayContainer } from '@angular/cdk/overlay';
import { merge, of, tap } from 'rxjs';
import { actionSettingsChangeTheme } from './settings.actions';

const INIT = of('init-effect-trigger');

@Injectable()
export class SettingsEffects {

  // updateTheme = createEffect(
  //   () =>
  //     merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
  //       tap(() => {
  //         const classList = this.overlayContainer.getContainerElement().classList;
  //         console.log(classList);
  //         const toRemove = Array.from(classList).filter((item: string) =>
  //           item.includes('-theme')
  //         );
  //         if (toRemove.length) {
  //           classList.remove(...toRemove);
  //         }
  //         classList.add('dark-theme');
  //       })
  //     ),
  //   { dispatch: false }
  // );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer
  ) {}
}
