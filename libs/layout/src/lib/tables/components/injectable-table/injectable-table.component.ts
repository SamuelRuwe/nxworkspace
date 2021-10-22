import { Component } from '@angular/core';
import { InjectableComponentTableComponent } from '../../injectable-table-bases/injectable-component-table/injectable-component-table.component';

@Component({
  selector: 'pg-layout-injectable-table',
  templateUrl: './injectable-table.component.html',
  styleUrls: ['./injectable-table.component.css']
})
export class InjectableTableComponent<T> extends InjectableComponentTableComponent<T> {}
