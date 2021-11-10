import { Component, NgZone } from '@angular/core';
import { EmscriptenWasmDirective } from '@puregeniusness/wasm/script-loader';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'pg-console-log-wasm',
  templateUrl: './console-log-wasm.component.html',
  styleUrls: ['./console-log-wasm.component.css']
})
export class ConsoleLogWasmComponent extends EmscriptenWasmDirective {

  logItems: string[] = [];

  constructor(ngZone: NgZone) {
    super('ConsoleLoggerModule', 'console-logger.js', { environment });

    this.moduleDecorator = (mod) => {
      mod.print = (arg: string) => {
        ngZone.run(() => this.logItems.push(arg));
      };
    };
  }

}
