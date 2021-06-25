import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-workspace-cell',
  template: `
    <button (click)="toggleAlive()" [ngClass]="alive ? 'alive' : 'dead'">
      <mat-icon>{{alive ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied'}}</mat-icon>
    </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input() alive!: boolean;

  toggleAlive() {
    this.alive = !this.alive;
  }

}
