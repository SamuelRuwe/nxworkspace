import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-quicksort',
  template: `
    <div>{{result}}</div>
  `,
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {

  result: Array<number> = [];

  ngOnInit(): void {
    this.loadWasm();
  }

  private async loadWasm() {
    const importObj = { env: { memory: new WebAssembly.Memory({initial: 256, maximum: 256}), STACKTOP: 0}};
    const response = await fetch('sam-wasm/quicksort/quicksort.wasm');
    const {instance} = await WebAssembly.instantiateStreaming(response, importObj);
    const {quicksort, getOffset} = instance.exports;

    // @ts-ignore
    const offset = getOffset();

    console.log(offset);
    console.log(instance);

    // const mem = new Uint32Array(importObj.env.memory.buffer, offset, 16);
    // @ts-ignore
    const mem = new Uint32Array(instance.exports.memory.buffer, offset, 16);
    for(let i = 0; i < 16; i++) {
      mem[i] = Math.floor(16 * Math.random());
    }

    // @ts-ignore
    const buf32 = new Uint32Array(instance.exports.memory.buffer, offset, 16);
    console.log(buf32);

    // @ts-ignore
    quicksort(0, 15);

    console.log(buf32);

    this.result = [];
    for(let i = 0; i < 16; i++) {
      this.result.push(mem[i]);
    }
  }

}
