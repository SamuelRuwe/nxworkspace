import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'pg-layout-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T> {

  dataSource!: MatTableDataSource<T>;
  // @In
  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  //
  // ngAfterViewInit(): void {
  // }
  //
  // ngOnDestroy(): void {
  // }

}
