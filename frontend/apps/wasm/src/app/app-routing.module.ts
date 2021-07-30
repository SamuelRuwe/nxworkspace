import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstWasmComponent } from './first-wasm/first-wasm.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LinkedinLearningWasmComponent } from './linkedin-learning-wasm/linkedin-learning-wasm.component';
import { ImportObjComponent } from './import-obj/import-obj.component';
import { MemoryObjectComponent } from './memory-object/memory-object.component';
import { QuickSortComponent } from './quicksort/quick-sort.component';
import { MatrixComponent } from './matrix/matrix.component';
import { LibwebpComponent } from './libwebp/libwebp.component';

const routes: Routes = [
  {path: 'basicwasm', component: FirstWasmComponent},
  {path: 'helloworld', component: HelloWorldComponent},
  {path: 'wasm', component: LinkedinLearningWasmComponent},
  {path: 'importobj', component: ImportObjComponent},
  {path: 'memobj', component: MemoryObjectComponent},
  {path: 'quicksort', component: QuickSortComponent},
  {path: 'matrix', component: MatrixComponent},
  {path: 'webp', component: LibwebpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
