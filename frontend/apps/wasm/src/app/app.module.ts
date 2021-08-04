import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from '@nx-workspace/layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx-workspace/material';
import { FormsModule } from '@angular/forms';
import { FirstWasmComponent } from './wasm/instantiate-streaming/first-wasm/first-wasm.component';
import { LinkedinLearningWasmComponent } from './wasm/instantiate-streaming/linkedin-learning-wasm/linkedin-learning-wasm.component';
import { MemoryObjectComponent } from './wasm/instantiate-streaming/memory-object/memory-object.component';
import { TestComponent } from './wasm/instantiate-streaming/test/test.component';
import { MatrixComponent } from './wasm/instantiate-streaming/matrix/matrix.component';
import { ImportObjComponent } from './wasm/instantiate-streaming/import-obj/import-obj.component';
import { HelloWorldComponent } from './wasm/instantiate-streaming/hello-world/hello-world.component';
import { StarfieldComponent } from './wasm/instantiate-streaming/starfield/starfield.component';
import { QuickSortComponent } from './wasm/instantiate-streaming/quicksort/quick-sort.component';
import { LibwebpComponent } from './wasm/instantiate-streaming/libwebp/libwebp.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'web-component-essentials';
import { WasmConsoleLoggerComponent } from './wasm/js-glue-code/console-logger/console-logger.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstWasmComponent,
    HelloWorldComponent,
    TestComponent,
    LinkedinLearningWasmComponent,
    ImportObjComponent,
    MemoryObjectComponent,
    QuickSortComponent,
    MatrixComponent,
    LibwebpComponent,
    StarfieldComponent,
    WasmConsoleLoggerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
