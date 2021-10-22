import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-import-obj',
  template: `{{value}}`,
  styleUrls: ['./import-obj.component.css']
})
export class ImportObjComponent implements OnInit {

  value = '';

  importObj = {
    env: {
      print_value: (x: string) => {
        this.value = x;
      }
    }
  }

  importedFunc: CallableFunction = () => 2;

  ngOnInit(): void {
    this.loadWasm();
  }

  private async loadWasm() {
    const response = await fetch("sam-wasm/callFuncInJS/call_func.wasm");
    const {instance, module} = await WebAssembly.instantiateStreaming(response, this.importObj);
    console.log(instance.exports);
    console.log(module);
    this.importedFunc = instance.exports.call_func as CallableFunction;
    this.importedFunc(9);
  }
}
