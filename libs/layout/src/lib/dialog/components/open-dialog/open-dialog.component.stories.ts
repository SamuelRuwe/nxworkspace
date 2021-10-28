import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PGFormsModule } from '@nx-workspace/forms';
import { Meta, moduleMetadata } from '@storybook/angular';
import { DialogModule } from '../../dialog.module';
import { OpenDialogComponent } from './open-dialog.component';

export default {
  title: 'Open Dialog',
  component: OpenDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [DialogModule, PGFormsModule, FormsModule, ReactiveFormsModule],
    })
  ],
} as Meta<OpenDialogComponent>;

export const Primary = () => ({
    props: {
        placeholder: "Select a thing",
        control: new FormControl(),
        options: [
            { key: "one", value: "1" },
            { key: "two", value: "2" },
            { key: "three", value: "3" }
        ]
    }
});
