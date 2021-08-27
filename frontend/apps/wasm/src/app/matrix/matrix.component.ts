import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-matric',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  ngOnInit(): void {
    this.loadWasm();
  }

  private async loadWasm() {

    const importObj = {
      env: {
        memory: new WebAssembly.Memory({
          initial: 256,
          maximum: 256
        })
      }
    }

    const response = await fetch('sam-wasm/matrix/matrix.wasm');
    const {instance, module}: any = await WebAssembly.instantiateStreaming(response, importObj);
    console.log(module);

    const offset = instance.exports.getOffset();

    // Create a typed array for each matrix and vector
    const {buffer} = instance.exports.memory;
    const matA = new Float32Array(buffer, offset, 16);
    const matB = new Float32Array(buffer, offset + 64, 16);
    const vec = new Float32Array(buffer, offset + 192, 4);
    const out = new Float32Array(buffer, offset + 208, 4);

    // Initialize values
    const k = 9.0;
    matA.fill(2.0);
    matB.fill(3.0);
    vec.fill(4.0);

    // Perform the multiplication operations
    instance.exports.scalarMult(0, k, 0);
    instance.exports.matrixMult(0, 16, 32);
    instance.exports.vectorMult(32, 48, 52);

    // Display the results
    let resultString = "";
    for (let i = 0; i < 4; i++) {
      resultString += ' ' + out[i];
    }
    console.log(resultString);
  }
}
