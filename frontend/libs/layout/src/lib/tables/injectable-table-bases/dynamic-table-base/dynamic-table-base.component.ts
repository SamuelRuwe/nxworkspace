import { Component } from '@angular/core';
import { AbstractTableComponent } from '../../../abstract-table/abstract-table.component';
import { TABLE } from '../../wrappers/table-wrapper/table.token';

@Component({
  selector: 'pg-layout-dynamic-table [elementData] [columns]',
  templateUrl: './dynamic-table-base.component.html',
  styleUrls: ['./dynamic-table-base.component.css'],
  providers: [{provide: TABLE, useExisting: DynamicTableBaseComponent}]
})
export class DynamicTableBaseComponent<T> extends AbstractTableComponent<T> {}
