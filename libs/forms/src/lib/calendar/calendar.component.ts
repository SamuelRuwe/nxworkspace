import { Component, Inject } from '@angular/core';
import {
  CALENDAR_CONTROLLER_PROVIDER,
  CALENDAR_WATCHED_CONTROLLER
} from './calendar-controller/calendar-controller.provider';
import { CalendarController } from './calendar-controller/calendar.controller';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'pg-forms-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CALENDAR_CONTROLLER_PROVIDER]
})

export class CalendarComponent {

  constructor(@Inject(CALENDAR_WATCHED_CONTROLLER) readonly calendarController: CalendarController) {}

  change($event: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.calendarController.control.setValue($event.value);
  }
}
