import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core.state';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './settings/settings.effects';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PgWasmModule } from '@puregeniusness/wasm/script-loader';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCog, faPlayCircle, faPowerOff, faRocket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faMediumM, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      SettingsEffects
    ]),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      name: 'Pure Geniusness'
    }),
    environment.wasmAssetsPath ? PgWasmModule.forRoot({ environment }) : [],
    FontAwesomeModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    faIconLibrary: FaIconLibrary
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
    faIconLibrary.addIcons(
      faCog,
      faBars,
      faRocket,
      faPowerOff,
      faUserCircle,
      faPlayCircle,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }
}
