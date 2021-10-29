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
import { SubmitCloseWrapperComponent } from './forms/wrappers/submit-close-wrapper/submit-close-wrapper.component';
import { ExampleComponent } from './forms/components/example/example.component';
import { PGFormsModule } from '@nx-workspace/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TableModule,
    ListModule,
    CardModule,
    ExpansionPanelModule,
    PGFormsModule
  ],
  declarations: [
    NavbarComponent,
    SubmitCloseWrapperComponent,
    ExampleComponent
  ],
  exports: [
    NavbarComponent,
    TableModule,
    ListModule,
    CardModule,
    ExpansionPanelModule,
    TabModule,
    ExampleComponent
  ]
})
export class LayoutModule {}
