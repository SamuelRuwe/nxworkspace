import { Meta, moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../../../../../../material/src';
import { PGFormsModule } from '../../../../../../forms/src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Dialogs/Forms/Example',
  component: FormComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule, PGFormsModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
    })
  ],
} as Meta<FormComponent>;

export const Primary = (args: any) => ({
  props: args
});

Primary.args = {
  title: 'Example Form',
  form: new FormControl()
}
