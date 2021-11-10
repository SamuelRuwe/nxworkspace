import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsContainerComponent } from './settings/settings-container.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule {}
