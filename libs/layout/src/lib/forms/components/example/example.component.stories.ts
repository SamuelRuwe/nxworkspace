import { Meta, moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../../../../../../material/src';
import { ExampleComponent } from './example.component';
import { PGFormsModule } from '../../../../../../forms/src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitCloseWrapperComponent } from '../../wrappers/submit-close-wrapper/submit-close-wrapper.component';

export default {
  title: 'Example',
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule, PGFormsModule, BrowserAnimationsModule],
      declarations: [SubmitCloseWrapperComponent]
    })
  ],
} as Meta<ExampleComponent>;

export const Primary = () => ({});
