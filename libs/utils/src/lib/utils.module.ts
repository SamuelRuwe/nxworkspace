import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysPipe } from './pipes/days.pipe';
import { SsnFormatPipe } from './pipes/ssn-format.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DaysPipe, SsnFormatPipe],
  exports: [DaysPipe, SsnFormatPipe]
})
export class UtilsModule {}
