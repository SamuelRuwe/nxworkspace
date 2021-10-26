import { Meta, moduleMetadata } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { TabsDirective } from './tabs.directive';

export default {
  title: 'Tabs Component',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MaterialModule],
      declarations: [TabsDirective]
    })
  ],
} as Meta<TabsComponent>;

export const Primary = () => ({
  component: TabsComponent
});
