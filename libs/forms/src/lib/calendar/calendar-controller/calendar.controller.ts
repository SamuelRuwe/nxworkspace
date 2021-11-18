import { Observable } from 'rxjs';
import { CalendarControlDirective } from './calendar-control.directive';
import { FormControl } from '@angular/forms';

export class CalendarController {
  constructor(
    readonly change$: Observable<void>,
    private readonly dir: CalendarControlDirective
  ) {}

  get control(): FormControl {
    return this.dir.calendarControl;
  }
}
