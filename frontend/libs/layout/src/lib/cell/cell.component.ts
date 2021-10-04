import { Component } from '@angular/core';
import {
  CanCallback,
  CanCallbackCtor,
  CellData,
  CellIcon,
  CellIconCtor,
  mixinCallback,
  mixinIcon,
  STRING_NUM
} from './cell';

export class CellBase {}

const _callbackCellBase = mixinCallback(CellBase);
const _callbackIconCell: CanCallbackCtor & CellIconCtor & typeof CellBase = mixinIcon(mixinCallback(CellBase));

@Component({template: ``})
export class AbstractCellComponent<T> {
  data!: T;
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
export class CellCallbackButtonComponent extends _callbackCellBase implements CanCallback {
  data!: CellData<STRING_NUM>;
}

@Component({
  template: `
    <button mat-raised-button color="primary" (click)="callback()">
      <mat-icon>{{data.value}}</mat-icon>
    </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackIconComponent extends _callbackIconCell implements CellIcon, CanCallback {
  data!: CellData<STRING_NUM>;
  icon!: string;
}
