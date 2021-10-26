import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsDirective } from './tabs.directive';
import { MaterialModule } from '@nx-workspace/material';



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
export class TabModule { }
