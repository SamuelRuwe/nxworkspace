import { Component } from '@angular/core';
import { BasicCell, CallbackCell, IconCell } from './cell';

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
  template: `
<!--//     <button mat-raised-button color="primary" (click)="callback()">{{data.value}}</button>-->
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackButtonComponent extends CellBase<CallbackCell> {}

// @Component({
//   template: `
//     <button mat-raised-button color="primary" (click)="callback()">
//       <mat-icon>{{icon}}</mat-icon>
//     </button>
//   `,
//   styleUrls: ['./cell.component.css']
// })
// export class CellCallbackIconComponent extends _callbackIconCell<string> implements CanCallback {}
//
// @Component({
//   template: `{{value | days}}`
// })
// export class CellDaysComponent extends _valueCell<STRING_NUM> {}

// const _callbackCellBase = mixinCallback(CellBase);
// const _callbackIconCell: CanCallbackCtor & CellIconCtor & typeof CellBase = mixinIcon(mixinCallback(CellBase));
