import { Meta, moduleMetadata } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { TabsDirective } from './tabs.directive';
import { AComponent } from '../test-components/a.component';
import { BComponent } from '../test-components/b.component';
import { Tab } from '../tab';

export default {
  title: 'Tabs/Components/Tabs Component',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MaterialModule],
      declarations: [TabsDirective]
    })
  ],
} as Meta<TabsComponent<any>>;

const tabs = [
  new Tab("A", AComponent),
  new Tab("B", BComponent)
];

export const Primary = () => ({
  props: {tabs},
  component: TabsComponent
});

export const Secondary = () => ({
  props: {tabs},
  template: `
       <pg-layout-tabs [tabs]="tabs"></pg-layout-tabs>
       <p>Hello World</p>
`
});
