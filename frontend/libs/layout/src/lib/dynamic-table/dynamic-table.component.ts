import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AbstractTableComponent } from '../abstract-table/abstract-table.component';

@Component({
  selector: 'pg-layout-dynamic-table [elementData] [columns]',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent<T> extends AbstractTableComponent<T> implements AfterViewInit {

  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  applyFilter(value: string) {
    this.dataSource.filter = value;
    this.dataSource.paginator?.firstPage();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
