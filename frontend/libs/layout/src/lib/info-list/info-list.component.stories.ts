import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LayoutModule } from '../layout.module';
import { InfoListComponent } from './info-list.component';

export default {
  title: 'InfoListComponent',
  component: InfoListComponent,
  decorators: [
    moduleMetadata({
      imports: [LayoutModule],
    })
  ],
} as Meta<InfoListComponent>;

const Template: Story<InfoListComponent> = (args: InfoListComponent) => ({
  props: args,
  component: InfoListComponent
});

export const Primary = Template.bind({});
Primary.args = {}
