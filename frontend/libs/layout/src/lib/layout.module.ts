import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CardWrapperComponent } from './card/card-wrapper.component';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import {
  AbstractCallbackCellComponent,
  AbstractCellComponent,
  CellCallbackButtonComponent,
  CellCallbackIconComponent,
  CellComponent,
  CellIconComponent,
} from './cell/cell.component';
import { CellHostDirective } from './cell-host.directive';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';

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
    AbstractCellComponent,
    AbstractCallbackCellComponent,
    CellCallbackIconComponent
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
    AbstractCallbackCellComponent,
    CellCallbackIconComponent
  ]
})
export class LayoutModule {}
