import { Component } from '@angular/core';
import { AbstractTableComponent } from '../../abstract-table/abstract-table.component';

@Component({
  selector: 'pg-layout-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.css']
})
export class ExpandableTableComponent<T> extends AbstractTableComponent<T> {}
