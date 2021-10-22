import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ExpandedRowGenerator, Table, TABLE } from '@nx-workspace/layout';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'pg-layout-component-injectable-table',
  templateUrl: './injectable-component-table.component.html',
  styleUrls: ['./injectable-component-table.component.css'],
  providers: [{provide: TABLE, useExisting: InjectableComponentTableComponent}]
})
export class InjectableComponentTableComponent<T> implements OnInit, AfterViewInit, Table<T> {

  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @Input() rowGenerator!: ExpandedRowGenerator<T>;
  @Input() elementData!: Array<T>;
  dataSource!: MatTableDataSource<T>;

  ngOnInit(): void {
    this.validateInput();
    this.dataSource = new MatTableDataSource<T>(this.elementData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private validateInput() {
    if (!this.elementData) throw new Error('ElementData is required in table component');
    if (this.elementData.length < 1) throw new Error('ElementData length must be greater than 0');
  }
}
