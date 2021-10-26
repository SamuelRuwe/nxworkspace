import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TABLE } from '../../table.token';
import { AbstractTableComponent } from '../../abstract-table/abstract-table.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'pg-layout-dynamic-table-base [elementData] [columns]',
  templateUrl: './dynamic-table-base.component.html',
  styleUrls: ['./dynamic-table-base.component.css'],
  providers: [{provide: TABLE, useExisting: DynamicTableBaseComponent}]
})
export class DynamicTableBaseComponent<T> extends AbstractTableComponent<T> implements AfterViewInit {
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
