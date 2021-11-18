import { Meta, moduleMetadata } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from './calendar.module';

export default {
  title: 'Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [CalendarModule]
    })
  ]
} as Meta<CalendarComponent>;

export const Primary = () => ({});

export const Secondary = () => ({
  template: `<pg-forms-calendar pgVal></pg-forms-calendar>`
});
