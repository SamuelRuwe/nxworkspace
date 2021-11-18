import { Meta, moduleMetadata } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from './calendar.module';
import { FormControl } from '@angular/forms';

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
  props: {
    calendarControl: new FormControl()
  },
  template: `<pg-forms-calendar pgVal [calendarControl]='calendarControl'></pg-forms-calendar>`
});
