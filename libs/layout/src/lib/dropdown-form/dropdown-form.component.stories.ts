import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { DropdownFormComponent } from './dropdown-form.component';

export default {
  title: 'Dropdown',
  component: DropdownFormComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MaterialModule],
    })
  ],
} as Meta<DropdownFormComponent>;

export const Primary = () => ({});
Primary.parameters = { component: DropdownFormComponent }