import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LinkedinLearningWasmComponent } from './wasm/instantiate-streaming/linkedin-learning-wasm/linkedin-learning-wasm.component';
import { MemoryObjectComponent } from './wasm/instantiate-streaming/memory-object/memory-object.component';
import { MatrixComponent } from './wasm/instantiate-streaming/matrix/matrix.component';
import { FirstWasmComponent } from './wasm/instantiate-streaming/first-wasm/first-wasm.component';
import { ImportObjComponent } from './wasm/instantiate-streaming/import-obj/import-obj.component';
import { HelloWorldComponent } from './wasm/instantiate-streaming/hello-world/hello-world.component';
import { QuickSortComponent } from './wasm/instantiate-streaming/quicksort/quick-sort.component';
import { LibwebpComponent } from './wasm/instantiate-streaming/libwebp/libwebp.component';
import { WasmConsoleLoggerComponent } from './wasm/js-glue-code/console-logger/console-logger.component';
import { StarfieldComponent } from './wasm/js-glue-code/starfield/starfield.component';

const routes: Routes = [
  {path: 'basicwasm', component: FirstWasmComponent, data: {name: 'Basic WASM'}},
  {path: 'helloworld', component: HelloWorldComponent, data: {name: 'Hello World'}},
  {path: 'wasm', component: LinkedinLearningWasmComponent, data: {name: 'LL WASM'}},
  {path: 'importobj', component: ImportObjComponent, data: {name: 'Import Object'}},
  {path: 'memobj', component: MemoryObjectComponent, data: {name: "Memory Object"}},
  {path: 'quicksort', component: QuickSortComponent, data: {name: "QuickSort"}},
  {path: 'matrix', component: MatrixComponent, data: {name: "Matrix"}},
  {path: 'webp', component: LibwebpComponent, data: {name: "Webp"}},
  {path: 'starfield', component: StarfieldComponent, data: {name: "StarField"}},
  {path: 'consolelogger', component: WasmConsoleLoggerComponent, data: {name: 'Console Logger'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
