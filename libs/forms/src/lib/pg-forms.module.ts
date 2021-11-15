import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from './dropdown';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
  ],
  declarations: [CalendarComponent],
  exports: [DropdownModule],
})
export class PGFormsModule {}
