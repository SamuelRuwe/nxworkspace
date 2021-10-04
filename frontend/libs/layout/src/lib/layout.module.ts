import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CardWrapperComponent } from './card/card-wrapper.component';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import {
  CellCallbackButtonComponent,
  CellCallbackIconComponent,
  CellComponent,
  CellDaysComponent,
  CellIconComponent,
} from './cell/cell.component';
import { CellHostDirective } from './cell-host.directive';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { DaysPipe } from './days.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CardWrapperComponent,
    TableComponent,
    DynamicTableComponent,
    CellComponent,
    CellIconComponent,
    CellHostDirective,
    CellCallbackButtonComponent,
    AbstractTableComponent,
    CellCallbackIconComponent,
    CellDaysComponent,
    DaysPipe
  ],
  exports: [
    NavbarComponent,
    CardWrapperComponent,
    TableComponent,
    DynamicTableComponent,
    CellHostDirective,
    CellComponent,
    CellIconComponent,
    CellCallbackButtonComponent,
    CellCallbackIconComponent,
    CellDaysComponent,
  ]
})
export class LayoutModule {}
