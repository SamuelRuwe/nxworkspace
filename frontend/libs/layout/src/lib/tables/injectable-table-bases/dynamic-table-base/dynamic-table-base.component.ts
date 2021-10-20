import { Component } from '@angular/core';
import { TABLE } from '@nx-workspace/layout';
import { AbstractTableComponent } from '../../abstract-table/abstract-table.component';

@Component({
  selector: 'pg-layout-dynamic-table [elementData] [columns]',
  templateUrl: './dynamic-table-base.component.html',
  styleUrls: ['./dynamic-table-base.component.css'],
  providers: [{provide: TABLE, useExisting: DynamicTableBaseComponent}]
})
export class DynamicTableBaseComponent<T> extends AbstractTableComponent<T> {}
