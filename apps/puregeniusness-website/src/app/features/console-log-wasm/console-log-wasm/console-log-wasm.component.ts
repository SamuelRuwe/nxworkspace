import { AfterViewInit, Component, NgZone } from '@angular/core';
import {
  EmscriptenLoaderService,
  EmscriptenModule,
  EmscriptenModuleDecorator
} from '@puregeniusness/wasm/script-loader';

@Component({
  selector: 'pg-console-log-wasm',
  templateUrl: './console-log-wasm.component.html',
  styleUrls: ['./console-log-wasm.component.css']
})
export class ConsoleLogWasmComponent<M> implements AfterViewInit {

  logItems: string[] = [];
  moduleDecorator: EmscriptenModuleDecorator<M>;

  constructor(ngZone: NgZone, private loader: EmscriptenLoaderService) {

    this.moduleDecorator = (mod: EmscriptenModule) => {
      mod.print = (arg: string) => {
        ngZone.run(() => this.logItems.push(arg));
      };
    };
  }

  async ngAfterViewInit() {
    console.log("after view init");
    const mod = await this.loader.loadScript('ConsoleLoggerModule', 'console-logger.js', this.moduleDecorator);
    console.log(mod);
  }

}
