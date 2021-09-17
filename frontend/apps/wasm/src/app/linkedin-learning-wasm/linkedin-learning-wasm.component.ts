import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-linkedin-learning-wasm',
  templateUrl: './linkedin-learning-wasm.component.html',
  styleUrls: ['./linkedin-learning-wasm.component.css']
})
export class LinkedinLearningWasmComponent implements OnInit {

  ngOnInit(): void {
    if ('WebAssembly' in window) {
      this.loadWasm();
    }
  }

  async loadWasm() {
    const response = await fetch("sam-wasm/seven/seven.wasm");
    const {instance} = await WebAssembly.instantiateStreaming(response);
    console.log(instance);
    const seven = instance.exports.seven as CallableFunction;
    console.log(seven());
  }

}

/**
 * All import objects (functions that call javascript from C) must be in the env property of
 * the import object.
 * const impObj = {
 *   env: {
 *      _foo: x => 3 * x
 *     }
 *   }
 *   Use underscores in Javascript, but not in C/C++ code
 */

// export interface BaseOptions<T> {
//   item: T;
// }
//
// export interface child extends BaseOptions<string> {
//   itemPrice: number;
// }
//
// export interface BaseModel<T extends U, U extends BaseOptions<?>> extends T {
//   someOtherProperty: string;
// }
//
