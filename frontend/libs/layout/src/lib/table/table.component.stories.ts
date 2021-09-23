import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TableComponent } from './table.component';

export default {
  title: 'TableComponent',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TableComponent<any>>;


export const Primary = () => ({});
Primary.args = {
}
