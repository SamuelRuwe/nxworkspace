import { AfterViewInit, Component, ContentChild, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TABLE } from '../../table.token';
import { Table } from '../../table.interface';

@Component({
  selector: 'pg-layout-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css']
})
export class TableWrapperComponent<T> implements AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ContentChild(TABLE, {static: true}) table!: Table<T>;

  applyFilter(value: string) {
    this.table.dataSource.filter = value;
    this.table.dataSource.paginator?.firstPage();
  }

  ngAfterViewInit(): void {
    this.table.dataSource.paginator = this.paginator;
  }

}
