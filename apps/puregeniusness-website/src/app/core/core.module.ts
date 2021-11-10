import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core.state';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './settings/settings.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      SettingsEffects
    ])
  ]
})
export class CoreModule {}
