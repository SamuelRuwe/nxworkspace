import { CalendarComponent } from './calendar.component';
import { RangeCalendarComponent } from './range-calendar/range-calendar.component';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Meta, moduleMetadata } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      declarations: [RangeCalendarComponent],
      imports: [
        NgxMaskModule.forRoot(), 
        MatDatepickerModule, 
        MatFormFieldModule, 
        MatNativeDateModule, 
        MatInputModule, 
        BrowserAnimationsModule
      ],
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
  ]
} as Meta<CalendarComponent>

export const Primary = () => ({})
