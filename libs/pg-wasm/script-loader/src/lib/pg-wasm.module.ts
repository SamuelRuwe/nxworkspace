import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENV_CONFIG, EnvironmentConfig } from '@puregeniusness/utils/environment';

@NgModule({
  imports: [CommonModule]

})
export class PgWasmModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<PgWasmModule> {
    if (!config.environment.wasmAssetsPath) {
      throw new Error('wasmAssetsPath property must be defined in ENV_CONFIG.');
    }
    return {
      ngModule: PgWasmModule,
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
