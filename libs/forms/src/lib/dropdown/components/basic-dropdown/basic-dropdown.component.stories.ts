import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { BasicDropdownComponent } from './basic-dropdown.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogService } from '../../../../../../layout/src/lib/dialog/services/dynamic-dialog.service';

export default {
  title: 'Dropdown',
  component: BasicDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule],
      providers: [DynamicDialogService]
    })
  ],
} as Meta<BasicDropdownComponent>;

export const Primary = (args: any) => ({
  props: args
});

Primary.args = {
  placeholder: "Select a thing",
  control: new FormControl(),
  options: [
    {key: "one", value: "1"},
    {key: "two", value: "2"},
    {key: "three", value: "3"}
  ]
}
