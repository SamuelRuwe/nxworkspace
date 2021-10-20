import { Meta, moduleMetadata } from '@storybook/angular';
import { DynamicTableBaseComponent } from './dynamic-table-base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Column, ColumnModel } from '../../../abstract-table/table';
import {
  callbackIconCell,
  dateCell,
  daysCell,
  iconCell,
  optionalIconCell,
  simpleStringCell,
  stringCell
} from '../../../cell/cell';
import { LayoutModule } from '../../../layout.module';

function log(data: string) {
  console.log(data);
}

type element = { position: number, name: string, weight: number, symbol: string }
const dateTimeExamples = ["2021-10-13T13:53:39.000+00:00", "2021-10-13T13:54:39.000+00:00", "2021-10-13T13:55:39.000+00:00"];
const data = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
]

const columns: Array<ColumnModel<element>> = [
  new Column({
    columnDef: 'name', header: 'Name', cell: ele => stringCell({value: ele.name}), isSortable: true
  }),
  new Column({columnDef: 'expandedElement', header: 'Weight', cell: ele => simpleStringCell(ele.weight)}),
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
  title: 'DynamicTableComponent',
  component: DynamicTableBaseComponent,
  decorators: [
    moduleMetadata({
      imports: [LayoutModule, BrowserAnimationsModule],
    })
  ],
} as Meta<DynamicTableBaseComponent<any>>;

export const Primary = (args: any) => ({
  props: args,
  template: `<pg-layout-dynamic-table [elementData]="data" [columns]="columns"></pg-layout-dynamic-table>`
});

Primary.args = {data, columns};

export const Comments = (args: { data: Array<unknown>, columns: Array<ColumnModel<unknown>> }) => ({
  props: args,
  template: `<pg-layout-dynamic-table [elementData]="data" [columns]="columns"></pg-layout-dynamic-table>`
});

Comments.args = {data, columns};
