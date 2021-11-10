import { Inject, Injectable } from '@angular/core';
import { ENV_CONFIG, EnvironmentConfig } from '@puregeniusness/utils/environment';
import { loadScript } from './load-script';
import { EmscriptenModuleDecorator, noopModuleDecorator } from '@puregeniusness/wasm/script-loader';

@Injectable({
  providedIn: 'root'
})
export class EmscriptenLoaderService {

  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig) {}

  async loadScript(moduleExportName: string, wasmJavaScriptLoader: string, moduleDecorator: EmscriptenModuleDecorator<any> = noopModuleDecorator) {
    return await loadScript(moduleExportName, `${this.config.environment.wasmAssetsPath}/${wasmJavaScriptLoader}`)
      .then(() => {
        const module = {
          locateFile: (file: string) =>
            `${this.config.environment.wasmAssetsPath}/${file}`
        };
        moduleDecorator(module);

        // @ts-ignore
        return window[(moduleExportName)](module);
      });
  }

}
