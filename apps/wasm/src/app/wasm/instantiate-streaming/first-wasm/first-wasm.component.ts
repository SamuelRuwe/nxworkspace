import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-first-wasm',
  template: `
    <mat-card>
      <mat-label>Number</mat-label>
      <input matInput type="number" [(ngModel)]="inputNum">
      <mat-label>Result:</mat-label>
      <span>{{minusOne(inputNum)}}</span>
    </mat-card>
  `,
  styleUrls: ['./first-wasm.component.css']
})
export class FirstWasmComponent implements OnInit {

  inputNum = 0;

  value: any = 'first value';

  minusOne: any = () => 2;

  ngOnInit(): void {
    // this.loadWasm();
    console.log('Nothing here');
  }

  // async loadWasm() {
  //   const response = await fetch('sam-wasm/optimized.wasm');
  //   console.log(response);
  //   const {instance, module} = await WebAssembly.instantiateStreaming(response);
  //   this.minusOne = instance.exports.minusOne;
  //   this.value = this.minusOne(10);
  // }

}
