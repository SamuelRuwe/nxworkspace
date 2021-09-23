import { Meta, moduleMetadata } from '@storybook/angular';
import { DynamicTableComponent } from './dynamic-table.component';
import { LayoutModule } from '../layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Cell } from './cell';
import { CellButtonComponent, CellCallbackComponent, CellComponent, CellDateComponent } from '../cell/cell.component';

export default {
  title: 'DynamicTableComponent',
  component: DynamicTableComponent,
  decorators: [
    moduleMetadata({
      imports: [LayoutModule, BrowserAnimationsModule],
    })
  ],
} as Meta<DynamicTableComponent<any>>;
function log(val: string) {
  console.log(val);
}

export const Primary = (args: any) => ({
  props: args
});

const genCell = (prop: string) => new Cell(CellCallbackComponent, {value: prop, cb: log});
const genCellDays = (prop: string) => new Cell(CellDateComponent, {value: prop});
const genCellButton = (prop: string) => new Cell(CellButtonComponent, {value: prop});

Primary.args = {
  elementData: [
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
  ],
  columns: [
    {columnDef: 'position', header: 'No.', cell: (ele: any) => genCell('open')},
    {columnDef: 'name', header: 'Name', cell: (ele: any) => genCell(ele.name)},
    {columnDef: 'weight', header: 'Weight', cell: (ele: any) => genCell(ele.weight)},
    {columnDef: 'symbol', header: 'Symbol', cell: (ele: any) => genCellDays(ele.symbol)},
    {columnDef: 'icon', header: 'icon', cell: (ele: any) => genCellButton('home')}
  ]
};
