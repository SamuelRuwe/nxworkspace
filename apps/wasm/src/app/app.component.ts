import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-root',
  template: `{{value}}`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  value: any = 'first value';

  minusOne: any = () => 2;

  ngOnInit(): void {
    this.loadWasm();
  }

  async loadWasm() {
    const response = await fetch('sam-wasm/optimized.wasm');
    const {instance} = await WebAssembly.instantiateStreaming(response);
    console.log(instance.exports);
    this.minusOne = instance.exports?.minusOne;
    this.value = this.minusOne(10);
  }

}
