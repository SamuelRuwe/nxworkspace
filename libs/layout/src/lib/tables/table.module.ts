import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { ExpandableTableComponent } from './components/expandable-table/expandable-table.component';
import { DynamicTableBaseComponent } from './injectable-table-bases/dynamic-table-base/dynamic-table-base.component';
import { ExpandableTableBaseComponent } from './injectable-table-bases/expandable-table-base/expandable-table-base.component';
import { MaterialModule } from '@nx-workspace/material';
import {
  CellCallbackButtonComponent,
  CellCallbackIconComponent,
  CellComponent,
  CellDateComponent,
  CellDaysComponent,
  CellIconComponent,
  CellOptionalIconComponent,
  ExpandedCellComponent
} from './cell/cell.component';
import { CellHostDirective } from './cell/cell-host.directive';
import { TableWrapperComponent } from './wrappers/table-wrapper/table-wrapper.component';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { UtilsModule } from '@nx-workspace/utils';

@NgModule({
  declarations: [
    DynamicTableComponent,
    ExpandableTableComponent,
    DynamicTableBaseComponent,
    ExpandableTableBaseComponent,
    CellComponent,
    CellIconComponent,
    CellDateComponent,
    CellCallbackButtonComponent,
    CellCallbackIconComponent,
    CellDaysComponent,
    CellOptionalIconComponent,
    CellHostDirective,
    TableWrapperComponent,
    AbstractTableComponent,
    ExpandedCellComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule
  ],
  exports: [
    DynamicTableComponent,
    ExpandableTableComponent,
    DynamicTableBaseComponent,
    ExpandableTableBaseComponent
  ]
})
export class TableModule {}
