import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoFieldsLineComponent } from './two-fields-line/two-fields-line.component';

@NgModule({
  declarations: [
    TwoFieldsLineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwoFieldsLineComponent
  ]
})
export class LinesModule {}
