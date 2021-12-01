import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightQueensComponent } from './eight-queens/eight-queens.component';

const routes: Routes = [
  {
    path: '',
    component: EightQueensComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EightQueensRoutingModule {}
