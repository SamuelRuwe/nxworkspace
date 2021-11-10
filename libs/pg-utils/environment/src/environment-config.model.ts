import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  environment: {
    production: boolean;
    wasmAssetsPath?: string;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
