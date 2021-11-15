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
import { LanguageDropdownComponent } from './forms/components/language-dropdown/language-dropdown.component';
import { PGFormsModule } from '@nx-workspace/forms';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TableModule,
    ListModule,
    CardModule,
    ExpansionPanelModule,
    PGFormsModule,
    CalendarModule
  ],
  declarations: [
    NavbarComponent,
    SubmitCloseWrapperComponent,
    LanguageDropdownComponent,
  ],
  exports: [
    NavbarComponent,
    TableModule,
    ListModule,
    CardModule,
    ExpansionPanelModule,
    TabModule,
    LanguageDropdownComponent,
  ]
})
export class LayoutModule {}
