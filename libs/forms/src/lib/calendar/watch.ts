import { ChangeDetectorRef } from '@angular/core';
import { MonoTypeOperatorFunction, tap } from 'rxjs';

export function watch<T>(
  changeDetectorRef: ChangeDetectorRef
): MonoTypeOperatorFunction<T> {
  return tap(() => {
    changeDetectorRef.markForCheck();
  });
}
