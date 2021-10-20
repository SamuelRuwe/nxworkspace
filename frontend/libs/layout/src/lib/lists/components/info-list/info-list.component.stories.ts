import { moduleMetadata, Story, Meta } from '@storybook/angular';
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

const Template: Story<InfoListComponent> = (args: InfoListComponent) => ({
  props: args,
  component: InfoListComponent
});

export const Primary = Template.bind({});
Primary.args = {}
