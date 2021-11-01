import { Meta, moduleMetadata } from '@storybook/angular';
import { InfoListComponent } from './info-list.component';
import { ListModule } from '../../list.module';

export default {
  title: 'InfoListComponent',
  component: InfoListComponent,
  decorators: [
    moduleMetadata({
      imports: [ListModule],
    })
  ],
} as Meta<InfoListComponent>;

export const Primary = (args: any) => ({
  props: args
});

Primary.args = {
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
}
