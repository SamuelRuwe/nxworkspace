import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, CellComponent, BoardComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], {initialNavigation: 'enabled'}),
        MatGridListModule,
        MatIconModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
