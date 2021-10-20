import { Meta, moduleMetadata } from '@storybook/angular';
import { ExpansionPanelListComponent } from './expansion-panel-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from '../../list.module';

export default {
  title: 'Expansion Panel List',
  component: ExpansionPanelListComponent,
  decorators: [
    moduleMetadata({
      imports: [ListModule, BrowserAnimationsModule],
    })
  ],
} as Meta<ExpansionPanelListComponent>;

export const Primary = (args: any) => ({
  props: args,
  template: `
        <pg-layout-expansion-panel-list>
            <div title>Title</div>
            <div description>Summary of Content</div>
            <div content>Some Data</div>
        </pg-layout-expansion-panel-list>
`
});
