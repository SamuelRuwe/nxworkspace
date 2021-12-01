import { Meta, moduleMetadata } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from './calendar.module';
import { FormControl, Validators } from '@angular/forms';

export default {
  title: 'Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [CalendarModule]
    })
  ]
} as Meta<CalendarComponent>;

export const Primary = () => ({
  props: {
    calendarControl: new FormControl(null, Validators.required)
  },
  template: `<pg-forms-calendar pgVal [control]='calendarControl'></pg-forms-calendar>`
});
