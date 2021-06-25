import { Component, ViewChild } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'nx-workspace-root',
  template: `
    <div class="container">
      <nx-workspace-board [boardSize]="{x: 10, y: 10}"></nx-workspace-board>
    </div>
    <div class="play">
      <button (click)="reset()">Reset</button>
      <button (click)="nextCycle()">Next</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(BoardComponent) boardComponent!: BoardComponent;

  reset() {
    this.boardComponent.reset();
  }

  nextCycle() {
    this.boardComponent.nextCycle();
  }

}

/**
 * ToDo
 * 1. Add logic for next cycle
 * 2. Allow user to change the board size values
 * 3. Create rewind button/rewind method
 * 4. Extract controls to their own component
 * 5. ???
 * 6. Profit
 */
