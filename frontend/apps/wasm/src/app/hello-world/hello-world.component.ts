import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-hello-world',
  template: `{{value}}`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  value = "";

  ngOnInit(): void {
    this.loadWasm();
  }

  async loadWasm() {
    const response = await fetch("sam-wasm/js-alert/a.out.wasm");
    console.log(response);

    const {instance} = await WebAssembly.instantiateStreaming(response);
    console.log(instance);
    const newFunc = instance.exports.samFunc as CallableFunction;
    console.log(newFunc());
    // const response = await fetch("sam-wasm/a.out.wasm");
    // const mod = await WebAssembly.instantiateStreaming(response);
    // console.log(mod);
    // main method can be called this way
    // console.log(mod.instance.exports.main());
    // HEAP8 = new Int8Array(mod.instance.exports.memory.buffer)
  }

}
