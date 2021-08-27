import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-memory-object',
  template: `
    {{value}}
    <button (click)="getProduct()">Get Product</button>
  `,
  styleUrls: ['./memory-object.component.css']
})
export class MemoryObjectComponent implements OnInit {

  value: any = '';

  getDotProduct: any;

  memObj = new WebAssembly.Memory({
    initial: 256,
    maximum: 256
  });

  importObj = {
    env: {
      memory: this.memObj
    }
  }

  getProduct() {
    this.value = this.getDotProduct();
  }

  ngOnInit(): void {
    this.loadWasm();
  }

  private async loadWasm() {
    const response = await fetch('sam-wasm/dotwasm/dot.wasm');
    const {instance} = await WebAssembly.instantiateStreaming(response, this.importObj);

    // @ts-ignore
    const offset1 = instance.exports.getFirstOffset();
    // @ts-ignore
    const offset2 = instance.exports.getSecondOffset();

    console.log(`Offset1: ${offset1}\n Offset2: ${offset2}`);

    // @ts-ignore
    const {buffer} = instance.exports.memory;

    const firstArray = new Uint32Array(buffer, offset1, 8);
    firstArray.fill(2);

    const secondArray = new Uint32Array(buffer, offset2, 8);
    secondArray.fill(3);

    console.log(this.importObj.env.memory);

    // @ts-ignore
    this.getDotProduct = instance.exports.dot_product;
  }

}
