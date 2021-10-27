import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from '../../table.module';
import { InjectableTableComponent } from './injectable-table.component';
import { Component } from '@angular/core';
import { CellBase } from '../../cell/cell.component';
import { Cell } from '../../cell/cell';
import { LinesModule } from '../../../lines/lines.module';
import { ExpansionPanelModule } from '../../../expansion-panels/expansion-panel.module';
import { element, ELEMENT_DATA } from '../../../storybook-utils/mock-data/elements';

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
  `,
})
class ExpandedCellComponent extends CellBase<any> {}

function expandedCellComponent(data: any) {
  return new Cell(ExpandedCellComponent, data);
}

const rowGenerator = (element: element) => expandedCellComponent({
  data1: {field: 'Name', value: element.name},
  data2: {field: 'Symbol', value: element.symbol}
});

export default {
  title: 'Tables/Components/Injectable Table',
  component: InjectableTableComponent,
  decorators: [
    moduleMetadata({
      imports: [TableModule, BrowserAnimationsModule, LinesModule, ExpansionPanelModule],
      declarations: [ExpandedCellComponent]
    })
  ],
} as Meta<InjectableTableComponent<element>>;

export const Primary = () => ({
  props: {data: ELEMENT_DATA, rowGenerator},
  template: `<pg-layout-injectable-table [elementData]="data" [rowGenerator]="rowGenerator"></pg-layout-injectable-table>`
});
