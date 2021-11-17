import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export const CALENDAR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true
};

// interface CalendarOutput {
//   userInput: string;
//   date: Date | null;
// }

@Component({
  selector: 'pg-forms-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CALENDAR_VALUE_ACCESSOR]
})
export class CalendarComponent implements ControlValueAccessor {

  @ViewChild('inputEl') inputEl!: ElementRef;
  // @Output() dateEmitter = new EventEmitter<CalendarOutput>();
  @Input() formControl?: FormControl;
  // dateInput = new FormControl('');
  // userInput = '';
  value: any;
  _onChange?: (val: any) => void;
  _onTouched?: (val: any) => void;
  
  writeValue(val: any) {
    console.log("writeval");
    // this.dateInput.setValue(val);
    console.log(val)
    // this.value = this.inputEl.nativeElement.value
    this.value = val
  }

  registerOnChange(callback: (val: any) => void) {
    this._onChange = callback;
    console.log("registeronchange");
  }

  registerOnTouched(callback: () => void) {
    this._onTouched = callback;
    console.log("registerontouched");
  }

  // _onChange(val: unknown) {
  //   console.log("_onchange", val);
  // }

  // _onTouched() {
  //   console.log("_ontouched");
  // }

  // emitValue(e: MatDatepickerInputEvent<Date, string>) {
    // console.log(this.inputEl.nativeElement.value, e.value);
    // this.userInput = this.inputEl.nativeElement.value
    // this.dateEmitter.emit({ userInput: this.userInput, date: e.value })
  // }

}
