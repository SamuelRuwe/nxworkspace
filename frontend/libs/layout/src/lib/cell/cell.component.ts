import { Component } from '@angular/core';
import { BasicCell, CallbackCell, CallbackIconCell, DateCell, IconCell } from './cell';

export class CellBase<T> {data!: T}

@Component({template: `{{data.value}}`, styleUrls: ['./cell.component.css']})
export class CellComponent extends CellBase<BasicCell> {}

@Component({
  template: `
    <mat-icon>{{data.icon}}</mat-icon>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellIconComponent extends CellBase<IconCell> {}

@Component({
  template: `{{data.value | date: 'MM/dd/yyyy hh:mm:ss a'}}`,
  styleUrls: ['./cell.component.css']
})
export class CellDateComponent extends CellBase<DateCell> {}

@Component({
  template: `
<!--    <button mat-raised-button color="primary" (click)="callback()">{{data.value}}</button>-->
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackButtonComponent extends CellBase<CallbackCell> {}

@Component({
  template: `
     <button mat-raised-button color="primary" (click)="data.callback()">
       <mat-icon>{{data.icon}}</mat-icon>
     </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackIconComponent extends CellBase<CallbackIconCell> {}

// @Component({
//   template: `{{value | days}}`
// })
// export class CellDaysComponent extends _valueCell<STRING_NUM> {}

// const _callbackCellBase = mixinCallback(CellBase);
// const _callbackIconCell: CanCallbackCtor & CellIconCtor & typeof CellBase = mixinIcon(mixinCallback(CellBase));
