import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { ExpandableTableComponent } from './components/expandable-table/expandable-table.component';
import { DynamicTableBaseComponent } from './injectable-table-bases/dynamic-table-base/dynamic-table-base.component';
import { ExpandableTableBaseComponent } from './injectable-table-bases/expandable-table-base/expandable-table-base.component';
import { MaterialModule } from '@nx-workspace/material';
import {
  CellCallbackIconComponent,
  CellComponent,
  CellDateComponent,
  CellDaysComponent,
  CellIconComponent,
  CellOptionalIconComponent,
} from './cell/cell.component';
import { CellHostDirective } from './cell/cell-host.directive';
import { TableWrapperComponent } from './wrappers/table-wrapper/table-wrapper.component';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { UtilsModule } from '@nx-workspace/utils';
import { ListModule } from '../lists/list.module';
import { LinesModule } from '../lines/lines.module';
import { InjectableComponentTableComponent } from './injectable-table-bases/injectable-component-table/injectable-component-table.component';
import { InjectableTableComponent } from './components/injectable-table/injectable-table.component';

@NgModule({
  declarations: [
    DynamicTableComponent,
    ExpandableTableComponent,
    DynamicTableBaseComponent,
    ExpandableTableBaseComponent,
    CellComponent,
    CellIconComponent,
    CellDateComponent,
    CellCallbackIconComponent,
    CellDaysComponent,
    CellOptionalIconComponent,
    CellHostDirective,
    TableWrapperComponent,
    AbstractTableComponent,
    InjectableComponentTableComponent,
    InjectableTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule,
    ListModule,
    LinesModule
  ],
  exports: [
    DynamicTableComponent,
    ExpandableTableComponent,
    DynamicTableBaseComponent,
    ExpandableTableBaseComponent,
    InjectableComponentTableComponent,
    InjectableTableComponent
  ]
})
export class TableModule {}
