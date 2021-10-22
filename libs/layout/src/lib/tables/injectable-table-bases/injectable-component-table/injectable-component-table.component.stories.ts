import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from '../../table.module';
import { InjectableComponentTableComponent } from './injectable-component-table.component';
import { Component } from '@angular/core';
import { CellBase } from '../../cell/cell.component';
import { Cell } from '../../cell/cell';
import { LinesModule } from '../../../lines/lines.module';
import { ExpansionPanelModule } from '../../../expansion-panels/expansion-panel.module';

@Component({
  template: `
    <pg-layout-expansion-panel>
      <div title>Billing</div>
      <div description>Employer Info Updated</div>
      <pg-layout-two-fields-line [data1]="data.data1" [data2]="data.data2" content></pg-layout-two-fields-line>
      <pg-layout-two-fields-line [data1]="data.data1" [data2]="data.data2" content></pg-layout-two-fields-line>
      <pg-layout-two-fields-line [data1]="data.data1" [data2]="data.data2" content></pg-layout-two-fields-line>
      <pg-layout-two-fields-line [data1]="data.data1" [data2]="data.data2" content></pg-layout-two-fields-line>
      <p content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan porttitor enim et porta.
        Donec magna turpis, fermentum quis diam sed, tempus molestie velit. Vivamus sollicitudin elementum lacus non
        pellentesque. Phasellus posuere orci nibh, vel sodales massa efficitur quis. Maecenas fringilla orci ac nulla
        sollicitudin lobortis. Donec rhoncus turpis sit amet dui iaculis scelerisque. Donec ac dictum lacus. Praesent
        augue ex, volutpat id ultrices eget, vehicula a libero. Integer feugiat aliquet accumsan. Vestibulum vel commodo
        eros, at ultricies tellus. Fusce quis rhoncus urna, in tempor arcu.</p>
    </pg-layout-expansion-panel>
  `
})
class ExpandedCellComponent<T> extends CellBase<any> {}

function expandedCellComponent(data: any) {
  return new Cell(ExpandedCellComponent, data);
}

type element = { position: number, name: string, weight: number, symbol: string }
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
];

const rowGenerator = (element: element) => expandedCellComponent({
  data1: {field: 'Name', value: element.name},
  data2: {field: 'Symbol', value: element.symbol}
});

export default {
  title: 'Table with Component Injection',
  component: InjectableComponentTableComponent,
  decorators: [
    moduleMetadata({
      imports: [TableModule, BrowserAnimationsModule, LinesModule, ExpansionPanelModule],
      declarations: [ExpandedCellComponent]
    })
  ],
} as Meta<InjectableComponentTableComponent<any>>;

export const Primary = () => ({
  props: {data, rowGenerator},
  template: `<pg-layout-component-injectable-table [elementData]="data" [rowGenerator]="rowGenerator"></pg-layout-component-injectable-table>`
});
