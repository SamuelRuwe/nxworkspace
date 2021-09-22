import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardWrapperComponent } from './card-wrapper.component';
import { LayoutModule } from '../layout.module';

export default {
  title: 'CardWrapperComponent',
  component: CardWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [LayoutModule],
    })
  ],
} as Meta<CardWrapperComponent>;

const Template: Story<CardWrapperComponent> = (args: CardWrapperComponent) => ({
  component: CardWrapperComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    title:  '',
}
