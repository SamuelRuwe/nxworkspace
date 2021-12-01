import { Directive, InjectionToken, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Controller } from '../controller';

export const PG_CALENDAR_FORM_CONTROL =
  new InjectionToken<CalendarControlDirective>('calendar form control', {
    factory: dateControlFactory
  });

@Directive({
  selector: '[pgVal]',
  providers: [
    {
      provide: PG_CALENDAR_FORM_CONTROL,
      useExisting: CalendarControlDirective
    }
  ]
})
export class CalendarControlDirective extends Controller {
  @Input() calendarControl: FormControl = new FormControl();
}

export function dateControlFactory(): CalendarControlDirective {
  return new CalendarControlDirective();
}
