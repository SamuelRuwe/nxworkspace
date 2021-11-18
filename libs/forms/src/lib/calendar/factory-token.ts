import { ChangeDetectorRef, InjectionToken, Optional, Provider } from '@angular/core';
import { MaskDateDirective } from './mask-date.directive';
import { Controller } from './controller';

export const WATCHED_CONTROLLER = new InjectionToken('watched hint controller');

export const WATCHED_CONTROLLER_PROVIDER: Provider = [
  {
    provide: WATCHED_CONTROLLER,
    deps: [[new Optional(), MaskDateDirective], ChangeDetectorRef],
    useFactory: watchedControllerFactory
  }
];

export function watchedControllerFactory(
  controller: MaskDateDirective | null,
  changeDetectorRef: ChangeDetectorRef
): Controller {
  console.log('Controller exists: ', !!controller);
  if (!controller) {
    return new MaskDateDirective();
  }

  controller.change$.subscribe(() => {
      changeDetectorRef.markForCheck();
    }
  );
  return controller;
}
