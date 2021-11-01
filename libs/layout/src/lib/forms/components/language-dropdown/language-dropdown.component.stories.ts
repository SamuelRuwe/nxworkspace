import { Meta, moduleMetadata } from '@storybook/angular';
import { LanguageDropdownComponent } from './language-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitCloseWrapperComponent } from '../../wrappers/submit-close-wrapper/submit-close-wrapper.component';
import { MaterialModule } from '@nx-workspace/material';
import { PGFormsModule } from '@nx-workspace/forms';

export default {
  title: 'Language Dropdown',
  component: LanguageDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule, PGFormsModule, BrowserAnimationsModule],
      declarations: [SubmitCloseWrapperComponent]
    })
  ],
} as Meta<LanguageDropdownComponent>;

export const Primary = () => ({});
