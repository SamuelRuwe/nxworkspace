import { AfterViewInit, Directive, Inject } from '@angular/core';
import { ENV_CONFIG, EnvironmentConfig } from '@puregeniusness/utils/environment';
import { loadScript } from './load-script';
import { EmscriptenModule } from './emscripten.module.model';

type EmscriptenModuleDecorator<M extends EmscriptenModule> = (module: M) => void;

const noopModuleDecorator = (mod: EmscriptenModule) => mod;

@Directive()
export abstract class EmscriptenWasmDirective<M extends EmscriptenModule = EmscriptenModule> implements AfterViewInit {
  private resolvedModule!: M;
  protected moduleDecorator!: EmscriptenModuleDecorator<M>;

  protected constructor(
    private moduleExportName: string,
    private wasmJavaScriptLoader: string,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
  ) {}

  get module(): M {
    return this.resolvedModule;
  }

  ngAfterViewInit(): void {
    this.resolveModule();
  }

  protected resolveModule(): void {
    loadScript(this.moduleExportName, `${this.config.environment.wasmAssetsPath}/${this.wasmJavaScriptLoader}`)
      .then(() => {
        const module = <M>{
          locateFile: (file: string) => {
            return `${this.config.environment.wasmAssetsPath}/${file}`;
          }
        };
        const moduleDecorator: EmscriptenModuleDecorator<M> = this.moduleDecorator || noopModuleDecorator;
        moduleDecorator(module);

        // @ts-ignore
        return window[(this.moduleExportName)](module);
      })
      .then((mod) => {
        this.resolvedModule = mod;
      });
  }
}
