import { Component, NgZone } from "@angular/core";
import { EmscriptenWasmDirective } from "../emscripten-wasm.directive";

@Component({
  templateUrl: "./console-logger.component.html",
})
export class WasmConsoleLoggerComponent extends EmscriptenWasmDirective {
  logItems: string[] = [];

  constructor(ngZone: NgZone) {
    super("ConsoleLoggerModule", "console-logger.js");

    this.moduleDecorator = (mod) => {
      mod.print = (what: string) => {
        ngZone.run(() => this.logItems.push(what));
      };
    };
  }
}
