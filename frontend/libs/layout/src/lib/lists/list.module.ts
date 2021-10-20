import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './components/info-list/info-list.component';
import { ExpansionPanelListComponent } from './components/expansion-panel-list/expansion-panel-list.component';
import { MaterialModule } from '@nx-workspace/material';

@NgModule({
  declarations: [
    InfoListComponent,
    ExpansionPanelListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    InfoListComponent,
    ExpansionPanelListComponent
  ]
})
export class ListModule {}
