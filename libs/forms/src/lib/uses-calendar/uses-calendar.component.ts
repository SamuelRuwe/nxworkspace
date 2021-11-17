import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pg-forms-uses-calendar',
  templateUrl: './uses-calendar.component.html',
  styleUrls: ['./uses-calendar.component.css']
})

export class UsesCalendarComponent  {
  ctrl = new FormControl();

  updateCalendar($event: any) {
    this.ctrl.setValue($event.currentTarget.value, {emitModelToViewChange: true});
  }
}