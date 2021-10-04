import { Component } from '@angular/core';
import {
  CanCallback,
  CanCallbackCtor,
  CellData,
  CellIconCtor,
  mixinCallback,
  mixinIcon,
  mixinValue,
  STRING_NUM
} from './cell';

export class CellBase<T> {
  data!: CellData<T>;
}

const _valueCell = mixinValue(CellBase);
const _iconCell = mixinIcon(CellBase);
const _callbackCellBase = mixinCallback(CellBase);
const _callbackIconCell: CanCallbackCtor & CellIconCtor<STRING_NUM> & typeof CellBase = mixinIcon(mixinCallback(CellBase));

@Component({template: `{{data.value}}`, styleUrls: ['./cell.component.css']})
export class CellComponent extends _callbackCellBase<STRING_NUM> {}

@Component({
  template: `
    <mat-icon>{{icon}}</mat-icon>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellIconComponent extends _iconCell<string> {}

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="callback()">{{data.value}}</button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackButtonComponent extends _callbackCellBase<STRING_NUM> implements CanCallback {}

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="callback()">
      <mat-icon>{{icon}}</mat-icon>
    </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackIconComponent extends _callbackIconCell<string> implements CanCallback {}

@Component({
  template: `{{value | days}}`
})
export class CellDaysComponent extends _valueCell<STRING_NUM> {}
