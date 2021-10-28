import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from './dropdown';

@NgModule({
  imports: [CommonModule, DropdownModule],
  declarations: [],
  exports: [DropdownModule]
})
export class PGFormsModule {}
