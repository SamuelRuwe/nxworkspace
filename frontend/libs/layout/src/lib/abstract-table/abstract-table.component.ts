import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnModel } from '@nx-workspace/layout';

@Component({template: ``})
export class AbstractTableComponent<T> implements OnInit {

  @Input() elementData!: Array<T>;
  @Input() columns!: Array<ColumnModel<T>>;
  displayedColumns!: Array<string>;
  dataSource!: MatTableDataSource<T>;

  ngOnInit(): void {
    this.validateInput();
    this.setDisplayedColumns();
    this.dataSource = new MatTableDataSource<T>(this.elementData);
  }

  private setDisplayedColumns() {
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  private validateInput() {
    if (!this.elementData) throw new Error('ElementData is required in table component');
    if (this.elementData.length < 1) throw new Error('ElementData length must be greater than 0');
    if (!this.columns) throw new Error('Columns is required in table component');
    if (this.columns.length < 1) throw new Error('Columns length must be greater than 0');
  }

}

