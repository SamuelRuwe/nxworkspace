import { Meta, moduleMetadata } from '@storybook/angular';
import { CardWrapperComponent } from './card-wrapper.component';
import { CardModule } from '../card.module';
import { MaterialModule } from '@nx-workspace/material';
import { LinesModule } from '../../lines/lines.module';
import { ListModule } from '../../lists/list.module';

export default {
  title: 'cards/Card Wrapper',
  component: CardWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [CardModule, MaterialModule, LinesModule, ListModule],
    })
  ],
} as Meta<CardWrapperComponent>;

export const Primary = () => ({
  props: {title: `I'm a card :D`}
});

export const InfoExample = () => ({
  props: {
    title: `Example Title`,
    data1: {field: 'Email', value: 'ruwesam@gmail.com'},
    data2: {field: 'Phone', value: '(111)-222-3344'}
  },
  template: `
    <pg-layout-card-wrapper [title]="title">
    <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
    <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>
    <pg-layout-two-fields-line [data1]="data1" [data2]="data2" content></pg-layout-two-fields-line>

    </pg-layout-card-wrapper>
  `
});

export const EmployeeExample = () => ({
  props: {
    title: `Example Title`,
    data: [
      {
        icon: 'phone',
        field: 'Phone Number',
        data: '(336) 577-2062'
      },
      {
        icon: 'email',
        field: 'Email',
        data: 'ruwesam@gmail.com'
      },
    ]

  },
  template: `
    <pg-layout-card-wrapper [title]="title">
    <pg-layout-info-list [data]="data" content></pg-layout-info-list>
    </pg-layout-card-wrapper>
  `
});
