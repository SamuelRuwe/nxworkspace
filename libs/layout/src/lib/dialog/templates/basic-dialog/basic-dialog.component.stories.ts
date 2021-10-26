import { Meta, moduleMetadata } from '@storybook/angular';
import { BasicDialogComponent } from './basic-dialog.component';
import { DialogModule } from '../../dialog.module';

export default {
  title: 'Basic Dialog',
  component: BasicDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [DialogModule],
    })
  ],
} as Meta<BasicDialogComponent>;

export const Primary = () => ({
  template: `
    <pg-layout-basic-dialog>
    <div title>Title</div>
    <div content>Content</div>
    <div actions>Actions</div>
    </pg-layout-basic-dialog>`
});
