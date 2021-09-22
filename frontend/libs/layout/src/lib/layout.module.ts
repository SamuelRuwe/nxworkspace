import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@nx-workspace/material';
import { RouterModule } from '@angular/router';
import { CardWrapperComponent } from './card/card-wrapper.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CardWrapperComponent,
    TableComponent
  ],
  exports: [NavbarComponent, CardWrapperComponent, TableComponent]
})
export class LayoutModule {}
