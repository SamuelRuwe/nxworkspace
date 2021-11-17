import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '../calendar/calendar.module';
import { UsesCalendarComponent } from './uses-calendar.component';



@NgModule({
  declarations: [UsesCalendarComponent],
  imports: [
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,
  ],
  exports: [UsesCalendarComponent]
})
export class UsesCalendarModule { }
