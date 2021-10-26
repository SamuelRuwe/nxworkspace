import { moduleMetadata, Meta } from '@storybook/angular';
import { CardWrapperComponent } from './card-wrapper.component';
import { CardModule } from '../card.module';
import { MaterialModule } from '@nx-workspace/material';

export default {
  title: 'cards/Card Wrapper',
  component: CardWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [CardModule, MaterialModule],
    })
  ],
} as Meta<CardWrapperComponent>;

export const Primary = () => ({ 
  props: { title: `I'm a card :D` }
});