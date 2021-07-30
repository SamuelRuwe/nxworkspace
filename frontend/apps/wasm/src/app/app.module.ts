import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstWasmComponent } from './first-wasm/first-wasm.component';
import { LayoutModule } from '@nx-workspace/layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TestComponent } from './test/test.component';
import { LinkedinLearningWasmComponent } from './linkedin-learning-wasm/linkedin-learning-wasm.component';
import { ImportObjComponent } from './import-obj/import-obj.component';
import { MemoryObjectComponent } from './memory-object/memory-object.component';
import { QuickSortComponent } from './quicksort/quick-sort.component';
import { MatrixComponent } from './matrix/matrix.component';
import { LibwebpComponent } from './libwebp/libwebp.component';

@NgModule({
  declarations: [AppComponent, FirstWasmComponent, HelloWorldComponent, TestComponent, LinkedinLearningWasmComponent, ImportObjComponent, MemoryObjectComponent, QuickSortComponent, MatrixComponent, LibwebpComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
