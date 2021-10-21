import { Meta, moduleMetadata } from '@storybook/angular';
import { ExpansionPanelListComponent } from './expansion-panel-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../list.module';
import { LinesModule } from '../../../lines/lines.module';

export default {
  title: 'Expansion Panel List',
  component: ExpansionPanelListComponent,
  decorators: [
    moduleMetadata({
      imports: [ListModule, BrowserAnimationsModule, LinesModule],
    })
  ],
} as Meta<ExpansionPanelListComponent>;

const data1 = {field: 'Email', value: 'ruwesam@gmail.com'};
const data2 = {field: 'Phone', value: '(111) 222-3344'};

export const Primary = (args: any) => ({
  props: args,
  template: `
        <pg-layout-expansion-panel-list>
            <div title>Title</div>
            <div description>Summary of Content</div>
            <div content>This is some example text for the expansion panel</div>
        </pg-layout-expansion-panel-list>
`
});

export const CommentExample = (args: any) => ({
  props: args,
  template: `
    <pg-layout-expansion-panel-list>
        <div title>Billing</div>
        <div description>Employer Info Updated</div>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
        <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
    </pg-layout-expansion-panel-list>
  `
});

CommentExample.args = {
  data1, data2
}

