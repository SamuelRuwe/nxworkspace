import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export const CALENDAR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true
};

@Component({
  selector: 'pg-forms-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CALENDAR_VALUE_ACCESSOR]
})
export class CalendarComponent implements ControlValueAccessor {

  @ViewChild('inputEl') inputEl!: ElementRef;

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}

  setValue(e: MatDatepickerInputEvent<Date, string>) {
    console.log(this.inputEl.nativeElement.value, e.value);
  }

}
