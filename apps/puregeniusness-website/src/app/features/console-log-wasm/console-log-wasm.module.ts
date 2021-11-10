import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleLogWasmComponent } from './console-log-wasm/console-log-wasm.component';
import { ConsoleLogWasmRoutingModule } from './console-log-wasm-routing.module';

@NgModule({
  declarations: [
    ConsoleLogWasmComponent
  ],
  imports: [
    CommonModule,
    ConsoleLogWasmRoutingModule
  ]
})
export class ConsoleLogWasmModule {}
