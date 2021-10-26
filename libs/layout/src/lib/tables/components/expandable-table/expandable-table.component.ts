import { Component, Input } from '@angular/core';
import { AbstractTableComponent } from '../../abstract-table/abstract-table.component';
import { ExpandedRowGenerator } from '../../column.interface';

@Component({
  selector: 'pg-layout-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.css']
})
export class ExpandableTableComponent<T> extends AbstractTableComponent<T> {
  @Input() expandedRowGenerator!: ExpandedRowGenerator<T>;
}
