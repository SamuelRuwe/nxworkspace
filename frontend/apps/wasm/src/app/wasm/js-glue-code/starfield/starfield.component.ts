import { Component, NgZone } from '@angular/core';
import { EmscriptenWasmDirective } from '../emscripten-wasm.directive';

@Component({
  selector: 'nx-workspace-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.css']
})
export class StarfieldComponent extends EmscriptenWasmDirective {

  constructor(ngZone: NgZone) {
    // super("ConsoleLoggerModule", "console-logger.js");
    super("Module", 'starfield.js');
    // this.moduleDecorator = (mod) => {
    //   mod.print = (what: string) => {
    //     ngZone.run(() => console.log(what));
    //   };
    // };
  }

  abObject: any = {};


  destructure() {
    const obj = {a: 'a', b: 'b'};
    this.abObject = {...this.abObject, ...obj};
  }

}
