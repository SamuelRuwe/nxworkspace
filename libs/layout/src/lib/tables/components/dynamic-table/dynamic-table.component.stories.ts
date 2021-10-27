import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Column, ColumnModel } from '../../column.interface';
import {
  callbackIconCell,
  dateCell,
  daysCell,
  iconCell,
  optionalIconCell,
  simpleStringCell,
  stringCell
} from '../../cell/cell';
import { TableModule } from '../../table.module';
import { DynamicTableComponent } from './dynamic-table.component';
import { element, ELEMENT_DATA } from '../../../storybook-utils/mock-data/elements';

function log(data: string) {
  console.log(data);
}

const dateTimeExamples = ["2021-10-13T13:53:39.000+00:00", "2021-10-13T13:54:39.000+00:00", "2021-10-13T13:55:39.000+00:00"];

const columns: Array<ColumnModel<element>> = [
  new Column({
    columnDef: 'name', header: 'Name', cell: ele => stringCell({value: ele.name}), isSortable: true
  }),
  new Column({columnDef: 'weight', header: 'Weight', cell: ele => simpleStringCell(ele.weight)}),
  new Column({columnDef: 'symbol', header: 'Symbol', cell: ele => stringCell({value: ele.symbol})}),
  new Column({columnDef: 'ic', header: 'icon', cell: () => iconCell({icon: 'email'})}),
  new Column({
    columnDef: 'cb',
    header: 'Button',
    cell: ele => callbackIconCell({returnValue: ele.name, callback: log, icon: 'phone'})
  }),
  new Column({columnDef: 'date', header: 'Date', cell: () => dateCell({value: dateTimeExamples[0]})}),
  new Column({columnDef: 'days', header: 'Age', cell: () => daysCell({value: dateTimeExamples[0]})}),
  new Column({
    columnDef: 'optionalIcon',
    header: 'Optional Icon',
    cell: () => optionalIconCell({icon: 'phone', shouldDisplay: false})
  }),
  new Column({
    columnDef: 'optionalIcon2',
    header: 'Optional Icon 2',
    cell: () => optionalIconCell({icon: 'phone', shouldDisplay: true})
  })
];

export default {
  title: 'Tables/Components/Dynamic Table',
  component: DynamicTableComponent,
  decorators: [
    moduleMetadata({
      imports: [TableModule, BrowserAnimationsModule]
    })
  ],
} as Meta<DynamicTableComponent<element>>;

export const Primary = () => ({
  props: {data: ELEMENT_DATA, columns},
  template: `<pg-layout-dynamic-table [elementData]="data" [columns]="columns"></pg-layout-dynamic-table>`
});
