import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './components/info-list/info-list.component';
import { MaterialModule } from '@nx-workspace/material';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    InfoListComponent,
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    InfoListComponent,
    ExpansionPanelComponent
  ]
})
export class ListModule {}
