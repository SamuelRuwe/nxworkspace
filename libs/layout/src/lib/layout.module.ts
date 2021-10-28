import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { TableModule } from './tables/table.module';
import { ListModule } from './lists/list.module';
import { CardModule } from './cards/card.module';
import { ExpansionPanelModule } from './expansion-panels/expansion-panel.module';
import { TabModule } from './tabs/tab.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TableModule,
    ListModule,
    CardModule,
    ExpansionPanelModule,
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    TableModule,
    ListModule,
    CardModule,
    ExpansionPanelModule,
    TabModule
  ]
})
export class LayoutModule {}
