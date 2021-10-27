import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@nx-workspace/material';
import { TabsComponent } from './tabs-component/tabs.component';
import { TabsDirective } from './tabs-component/tabs.directive';

@NgModule({
  declarations: [
    TabsComponent,
    TabsDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TabsComponent,
  ]

})
export class TabModule {}
