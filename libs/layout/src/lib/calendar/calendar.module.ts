import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { RangeCalendarComponent } from './range-calendar/range-calendar.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CalendarComponent, RangeCalendarComponent],
  imports: [NgxMaskModule.forRoot(), MatDatepickerModule, MatFormFieldModule],
  exports: [CalendarComponent, RangeCalendarComponent],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL']
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      }
    }
  ]
})

export class CalendarModule {
}
