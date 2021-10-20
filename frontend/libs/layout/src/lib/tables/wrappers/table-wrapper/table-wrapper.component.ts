import { AfterViewInit, Component, ContentChild, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TABLE, Table } from '@nx-workspace/layout';

@Component({
  selector: 'pg-layout-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css']
})
export class TableWrapperComponent implements AfterViewInit {

  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ContentChild(TABLE, {static: true}) table!: Table;

  applyFilter(value: string) {
    this.table.dataSource.filter = value;
    this.table.dataSource.paginator?.firstPage();
  }

  ngAfterViewInit(): void {
    this.table.dataSource.sort = this.sort;
    this.table.dataSource.paginator = this.paginator;
  }

}
