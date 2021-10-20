import { Component } from '@angular/core';
import { AbstractTableComponent } from '../../abstract-table/abstract-table.component';

@Component({
  selector: 'pg-layout-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent<T> extends AbstractTableComponent<T> {}
