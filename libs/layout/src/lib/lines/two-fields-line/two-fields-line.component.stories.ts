import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoFieldsLineComponent } from './two-fields-line.component';
import { LinesModule } from '../lines.module';

export default {
  title: 'Two Fields Line',
  component: TwoFieldsLineComponent,
  decorators: [
    moduleMetadata({
      imports: [LinesModule, BrowserAnimationsModule],
    })
  ],
} as Meta<TwoFieldsLineComponent>;

export const Primary = (args: any) => ({
  props: args
});

Primary.args = {
  data1: {field: 'a', value: 'aaa'},
  data2: {field: 'b', value: 'bbb'}
}

export const EmailPhone = (args: any) => ({
  props: args
});

EmailPhone.args = {
  data1: {field: 'Email', value: 'ruwesam@gmail.com'},
  data2: {field: 'Phone', value: '(111)-222-3344'}
}
