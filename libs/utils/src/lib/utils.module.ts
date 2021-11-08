import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysPipe } from './pipes/days.pipe';
import { SsnFormatPipe } from './pipes/ssn-format.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DaysPipe, SsnFormatPipe, HighlightDirective],
  exports: [DaysPipe, SsnFormatPipe, HighlightDirective]
})
export class UtilsModule {}
