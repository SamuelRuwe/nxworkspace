import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsContainerComponent } from './settings/settings-container.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule
  ]
})
export class SettingsModule {}
