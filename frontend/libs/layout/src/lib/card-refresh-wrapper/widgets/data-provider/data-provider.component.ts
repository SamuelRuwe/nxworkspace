import { Component } from '@angular/core';
import { WIDGET } from '../../widget.token';
import { Widget } from '../../widget.interface';

@Component({
  selector: 'pg-layout-data-provider',
  templateUrl: './data-provider.component.html',
  styleUrls: ['./data-provider.component.css'],
  providers: [
    {provide: WIDGET, useExisting: DataProviderComponent}
  ]
})
export class DataProviderComponent implements Widget {

  load(): void {
    console.log('loading data');
  }

  refresh(): void {
    console.log('refreshing data');
  }

}
