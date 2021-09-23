import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'pg-layout-dynamic-table [elementData] [columns]',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent<T> implements OnInit, AfterViewInit {

  @Input() elementData!: Array<T>;
  @Input() columns!: Array<any>;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  displayedColumns!: Array<string>;

  dataSource!: MatTableDataSource<T>;

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.columnDef);
    this.dataSource = new MatTableDataSource<T>(this.elementData);
  }

  applyFilter(value: string) {
    this.dataSource.filter = value;
    this.dataSource.paginator?.firstPage();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



}
