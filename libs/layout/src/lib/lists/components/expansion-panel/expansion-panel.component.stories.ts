import { Meta, moduleMetadata } from '@storybook/angular';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../list.module';
import { LinesModule } from '../../../lines/lines.module';

export default {
  title: 'Expansion Panel',
  component: ExpansionPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [ListModule, BrowserAnimationsModule, LinesModule],
    })
  ],
} as Meta<ExpansionPanelComponent>;

const data1 = {field: 'Email', value: 'ruwesam@gmail.com'};
const data2 = {field: 'Phone', value: '(111) 222-3344'};

export const Primary = (args: any) => ({
  props: args,
  template: `
        <pg-layout-expansion-panel>
            <div title>Title</div>
            <div description>Summary of Content</div>
            <div content>This is some example text for the expansion panel</div>
        </pg-layout-expansion-panel>
        <pg-layout-expansion-panel>
            <div title>Title</div>
            <div description>Summary of Content</div>
            <div content>This is some example text for the expansion panel</div>
        </pg-layout-expansion-panel>
`
});

export const CommentExample = (args: any) => ({
  props: args,
  template: `
    <pg-layout-expansion-panel>
        <div title>Billing</div>
        <div description>Employer Info Updated</div>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <p content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan porttitor enim et porta.
        Donec magna turpis, fermentum quis diam sed, tempus molestie velit. Vivamus sollicitudin elementum lacus non
        pellentesque. Phasellus posuere orci nibh, vel sodales massa efficitur quis. Maecenas fringilla orci ac nulla
        sollicitudin lobortis. Donec rhoncus turpis sit amet dui iaculis scelerisque. Donec ac dictum lacus. Praesent
        augue ex, volutpat id ultrices eget, vehicula a libero. Integer feugiat aliquet accumsan. Vestibulum vel commodo
        eros, at ultricies tellus. Fusce quis rhoncus urna, in tempor arcu.</p>
    </pg-layout-expansion-panel>
  `
});

CommentExample.args = {
  data1, data2
}

