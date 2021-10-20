import { moduleMetadata, Meta } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { LayoutModule } from '../layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'TabsComponent',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LayoutModule, 
        BrowserAnimationsModule
      ]
    })
  ],
} as Meta<TabsComponent>;

export const Primary = (args: any) => ({
  component: TabsComponent
});
