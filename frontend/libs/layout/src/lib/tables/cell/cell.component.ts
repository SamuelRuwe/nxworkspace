import { Component } from '@angular/core';
import { BasicCell, CallbackCell, CallbackIconCell, DateCell, IconCell, OptionalIcon } from './cell';

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
     <button mat-raised-button color="primary" (click)="data.callback(data.returnValue)">
       <mat-icon>{{data.icon}}</mat-icon>
     </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellCallbackIconComponent extends CellBase<CallbackIconCell> {}


@Component({
  template: `{{data.value | days}}`,
  styleUrls: ['./cell.component.css']
})
export class CellDaysComponent extends CellBase<DateCell> {}

@Component({
  template: `<mat-icon *ngIf="data.shouldDisplay">{{data.icon}}</mat-icon>`,
  styleUrls: ['./cell.component.css']
})
export class CellOptionalIconComponent extends CellBase<OptionalIcon> {}
