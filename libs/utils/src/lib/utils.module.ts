import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysPipe } from './pipes/days.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DaysPipe],
  exports: [DaysPipe]
})
export class UtilsModule {}
