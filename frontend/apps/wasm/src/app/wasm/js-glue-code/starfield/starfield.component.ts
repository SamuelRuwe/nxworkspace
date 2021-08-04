import { Component, NgZone } from '@angular/core';
import { EmscriptenWasmDirective } from '../emscripten-wasm.directive';

@Component({
  selector: 'nx-workspace-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.css']
})
export class StarfieldComponent extends EmscriptenWasmDirective {

  constructor(ngZone: NgZone) {
    super("StarFieldModule", 'starfield.js');

    this.moduleDecorator = (mod) => {
      //
    }
  }
}
