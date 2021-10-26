import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDialogComponent } from './templates/basic-dialog/basic-dialog.component';
import { MaterialModule } from '@nx-workspace/material';

@NgModule({
  declarations: [
    BasicDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DialogModule {}
