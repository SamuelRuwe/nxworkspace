import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleLogWasmComponent } from './console-log-wasm/console-log-wasm.component';

const routes: Routes = [
  {
    path: '',
    component: ConsoleLogWasmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleLogWasmRoutingModule {}
