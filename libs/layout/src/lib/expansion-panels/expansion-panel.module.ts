import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './templates/expansion-panel/expansion-panel.component';
import { MaterialModule } from '@nx-workspace/material';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ExpansionPanelComponent]
})
export class ExpansionPanelModule {}
