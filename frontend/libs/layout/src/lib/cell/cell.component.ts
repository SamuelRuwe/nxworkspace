import { Component, Input } from '@angular/core';

@Component({
  template: `{{data.value}}`,
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() data!: { value: string };
}

@Component({
  template: `<mat-icon>{{data.value}}</mat-icon>`,
  styleUrls: ['./cell.component.css']
})
export class CellButtonComponent {
  @Input() data!: { value: string };
}

@Component({
  template: `{{data.value}} days`,
  styleUrls: ['./cell.component.css']
})
export class CellDateComponent {
  @Input() data!: { value: string };
}

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="cbFunc()">{{data.value}}</button>`,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackComponent {
  @Input() data!: { value: string, cb?: (data: string) => void };

  cbFunc() {
    if (this.data.cb) this.data.cb(this.data.value);
  }
}

