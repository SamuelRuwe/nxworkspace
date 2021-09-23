import { Component, Input } from '@angular/core';
import { CallbackData, CellData, STRING_NUM } from './cell';

@Component({template: ``})
export class AbstractCellComponent<T> {
  @Input() data!: T;
}

@Component({template: ``})
export class AbstractCallbackCellComponent<T> extends AbstractCellComponent<CallbackData<T>> {
  callback() {
    return this.data.callback(this.data.returnValue);
  }
}

@Component({template: `{{data.value}}`, styleUrls: ['./cell.component.css']})
export class CellComponent extends AbstractCellComponent<CellData<STRING_NUM>> {}

@Component({
  template: `
    <mat-icon>{{data.value}}</mat-icon>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellIconComponent extends AbstractCellComponent<CellData<string>> {}

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="callback()">{{data.value}}</button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackButtonComponent extends AbstractCallbackCellComponent<CallbackData<STRING_NUM>> {}

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="callback()">
      <mat-icon>{{data.value}}</mat-icon>
    </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackIconComponent extends AbstractCallbackCellComponent<CallbackData<STRING_NUM>> {}

