import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from './dropdown';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '@nx-workspace/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    MatNativeDateModule,
    MaterialModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  exports: [
    DropdownModule,
    CalendarModule
  ]
})
export class PGFormsModule {}
