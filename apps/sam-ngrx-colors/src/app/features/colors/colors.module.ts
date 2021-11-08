import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { ColorsRoutingModule } from './colors-routing.module';
import { UtilsModule } from '@nx-workspace/utils';

@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    CommonModule,
    ColorsRoutingModule,
    UtilsModule
  ]
})
export class ColorsModule {}
