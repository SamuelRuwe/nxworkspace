import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-root',
  template: `
    <div class="container">
      <nx-workspace-board [boardSize]="{x: 10, y: 10}"></nx-workspace-board>
    </div>
    <div class="play">
      <button>Next</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
