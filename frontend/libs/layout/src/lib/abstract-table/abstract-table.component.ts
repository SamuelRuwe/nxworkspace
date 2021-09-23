import { Component, OnInit } from '@angular/core';

@Component({template: ``})
export class AbstractTableComponent implements OnInit {

  ngOnInit(): void {

  }

  private validateInput() {
    if (!this.elementData) throw new Error('ElementData is required in dynamic table component');
    if (this.elementData.length < 1) throw new Error('ElementData length must be greater than 0');
    if (!this.columns) throw new Error('Columns is required in dynamic table component');
    if (this.columns.length < 1) throw new Error('Columns length must be greater than 0');
  }

}

