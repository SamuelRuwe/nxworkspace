import { ChangeDetectorRef, InjectionToken, Provider } from '@angular/core';
import { CalendarController } from './calendar.controller';
import { merge, NEVER, Observable, takeUntil } from 'rxjs';
import { CalendarControlDirective, PG_CALENDAR_FORM_CONTROL } from './calendar-control.directive';
import { watch } from '../watch';
import { DestroyService } from '@nx-workspace/utils';

export const CALENDAR_WATCHED_CONTROLLER =
  new InjectionToken('watched calendar controller');

export function calendarWatchedControllerFactory(
  changeDetectorRef: ChangeDetectorRef,
  destroy$: Observable<void>,
  ...controllers: [
    CalendarControlDirective
  ]
): CalendarController {
  const change$ = merge(...controllers.map(({ change$ }) => change$ || NEVER)).pipe(
    watch(changeDetectorRef),
    takeUntil(destroy$)
  );

  change$.subscribe();
  return new CalendarController(change$, ...controllers);
}

export const CALENDAR_CONTROLLER_PROVIDER: Provider = [
  DestroyService,
  {
    provide: CALENDAR_WATCHED_CONTROLLER,
    deps: [
      ChangeDetectorRef,
      DestroyService,
      PG_CALENDAR_FORM_CONTROL
    ],
    useFactory: calendarWatchedControllerFactory
  }
];
