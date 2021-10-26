import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@nx-workspace/layout';

@NgModule({
  declarations: [AppComponent, CellComponent, BoardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
