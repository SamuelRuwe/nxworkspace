import { Meta, moduleMetadata } from '@storybook/angular';
import { DynamicTableComponent } from './dynamic-table.component';

export default {
  title: 'DynamicTableComponent',
  component: DynamicTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DynamicTableComponent<any>>;

export const Primary = () => ({});
