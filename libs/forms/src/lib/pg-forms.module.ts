import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from './dropdown';
import { UsesCalendarComponent } from './uses-calendar/uses-calendar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '@nx-workspace/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from './calendar/calendar.module';
import { UsesCalendarModule } from './uses-calendar/uses-calendar.module';


@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    MatNativeDateModule,
    MaterialModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CalendarModule,
    UsesCalendarModule
  ],
  exports: [
    DropdownModule,
    CalendarModule,
    UsesCalendarModule,
  ],
})
export class PGFormsModule {}
