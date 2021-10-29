import { Meta, moduleMetadata } from '@storybook/angular';
import { SubmitCloseWrapperComponent } from './submit-close-wrapper.component';
import { MaterialModule } from '../../../../../../material/src';

export default {
  title: 'Forms/Wrappers/Example Wrapper',
  component: SubmitCloseWrapperComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule],
    })
  ],
} as Meta<SubmitCloseWrapperComponent>;

export const Primary = () => ({});
