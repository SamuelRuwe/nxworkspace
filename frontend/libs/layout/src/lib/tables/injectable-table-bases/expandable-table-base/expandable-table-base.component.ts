import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AbstractTableComponent } from '../../../abstract-table/abstract-table.component';

@Component({
  selector: 'pg-layout-expandable-table',
  templateUrl: './expandable-table-base.component.html',
  styleUrls: ['./expandable-table-base.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class ExpandableTableBaseComponent<T> extends AbstractTableComponent<T> {
  expandedElement: any;
}
