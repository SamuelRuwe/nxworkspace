import { Component } from '@angular/core';
import { BasicCell, CellIconCtor, Constructor, HasValueCtor, IconCell, STRING_NUM } from './cell';
// const _callbackCellBase = mixinCallback(CellBase);
// const _callbackIconCell: CanCallbackCtor & CellIconCtor & typeof CellBase = mixinIcon(mixinCallback(CellBase));

export class CellBase<T extends Record<string, unknown>> {data!: T}
function mixinValue<T extends Record<string, unknown>>() {
  return class extends CellBase<any> {
    get value() { return this.data.value; }
  }
}

function mixinIcon<T extends Constructor<any>>(base: T): CellIconCtor & T {
  return class extends base {
    get icon() { return this.data.icon; }
  }
}

const _valueCell = mixinValue();
// const _iconCell = mixinIcon();

@Component({template: `{{value}}`, styleUrls: ['./cell.component.css']})
export class CellComponent extends _valueCell {}

@Component({
  template: `
    <mat-icon>{{data.icon}}</mat-icon>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellIconComponent {data!: IconCell;}

//
// @Component({
//   template: `
//     <button mat-raised-button color="primary" (click)="callback()">{{data.value}}</button>
//   `,
//   styleUrls: ['./cell.component.css']
// })
// export class CellCallbackButtonComponent extends _callbackCellBase<STRING_NUM> implements CanCallback {}
//
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
