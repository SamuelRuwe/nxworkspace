import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDialogComponent } from './templates/basic-dialog/basic-dialog.component';
import { MaterialModule } from '@nx-workspace/material';
import { PGFormsModule } from '@nx-workspace/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';

@NgModule({
  declarations: [
    BasicDialogComponent,
    OpenDialogComponent,
    DynamicDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PGFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    BasicDialogComponent,
    OpenDialogComponent
  ]
})
export class DialogModule {}
