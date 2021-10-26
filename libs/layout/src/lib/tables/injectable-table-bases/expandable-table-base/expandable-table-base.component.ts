import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AbstractTableComponent } from '../../abstract-table/abstract-table.component';
import { MatSort } from '@angular/material/sort';
import { TABLE } from '../../table.token';
import { ExpandedRowGenerator } from '../../column.interface';

@Component({
  selector: 'pg-layout-expandable-table-base [elementData] [columns]',
  templateUrl: './expandable-table-base.component.html',
  styleUrls: ['./expandable-table-base.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])],
  providers: [{provide: TABLE, useExisting: ExpandableTableBaseComponent}]
})
export class ExpandableTableBaseComponent<T> extends AbstractTableComponent<T> implements AfterViewInit {
  expandedElement!: T;
  @Input() expandedRowGenerator!: ExpandedRowGenerator<T>;

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
