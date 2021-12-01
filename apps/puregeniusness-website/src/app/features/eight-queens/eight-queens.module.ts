import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EightQueensComponent } from './eight-queens/eight-queens.component';
import { EightQueensRoutingModule } from './eight-queens-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EightQueensComponent
  ],
  imports: [
    CommonModule,
    EightQueensRoutingModule,
    FormsModule
  ]
})
export class EightQueensModule {}
