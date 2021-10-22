import { Meta, moduleMetadata } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../../material/src';

export default {
  title: 'Tabs Component',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MaterialModule]
    })
  ],
} as Meta<TabsComponent>;

export const Primary = () => ({
  component: TabsComponent
});
