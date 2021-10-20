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

export const Primary = () => ({});
