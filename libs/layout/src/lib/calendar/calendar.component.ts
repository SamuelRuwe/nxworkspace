import { ChangeDetectorRef, Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

export const CALENDAR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true
};

@Component({
  selector: 'pg-layout-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CALENDAR_VALUE_ACCESSOR]
})
export class CalendarComponent implements ControlValueAccessor {

  @ViewChild('inputEl') elRef!: ElementRef;

  value = null;
  disabled = false;

  constructor(private changeDetector: ChangeDetectorRef) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  propagateChange: (value: any) => void = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.changeDetector.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetector.markForCheck();
  }

  // add logic here to clear the input if it is invalid
  setValue(evt: any) {
    if (this.disabled) {
      return;
    }
    const momentDateObj = moment(this.elRef.nativeElement.value);
    const dateObj = {
      year: momentDateObj.year(),
      month: momentDateObj.month() + 1,
      day: momentDateObj.date()
    };
    this.value = dateObj;
    this.propagateChange(this.value);
  }

}
