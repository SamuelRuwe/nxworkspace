import { Type } from '@angular/core';
import { CellBase, CellComponent, CellIconComponent } from './cell.component';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;
export type Constructor<T> = new(...args: any[]) => T;
export type AbstractConstructor<T> = abstract new (...args: any[]) => T;

export class Cell<T> {
  constructor(public component: Type<any>, public data: T) {}
}

export type CellData<T extends Record<string, any>> = T;

export interface Iconable {
  icon: string;
}

export interface CanDisable {
  disabled: boolean;
}

/**
 * CellData: {
 *   data: {
 *     icon: string;
 *     disabled: boolean;
 *   }
 * }
 */


//
// export interface RequiredCellValue<T> {
//   readonly value: T;
// }
//
// export interface CallbackData<T> extends CellData<T> {
//   callback: (arg: VALID_RETURN_TYPES) => void;
//   returnValue: VALID_RETURN_TYPES;
// }
//
// export interface CellIcon<T> extends CellData<T> {
//   readonly icon: string;
// }
//
// export interface CanDisable {
//   disabled: boolean;
// }
//
export type HasValueCtor<T> = Constructor<T> & AbstractConstructor<T>;
//
// export type CanDisableCtor = Constructor<CanDisable> & AbstractConstructor<CanDisable>;
//
// export type CanCallbackCtor = Constructor<CanCallback> & AbstractConstructor<CanCallback>;
//
export type CellIconCtor = Constructor<string> & AbstractConstructor<string>;

// export function mixinValue<T extends AbstractConstructor<any>>(base: T): HasValueCtor<T> & T;
// export function mixinValue<T extends Constructor<any>>(base: T): HasValueCtor<T> & T {
//   return class extends base {
//     get value() {
//       return this.data.value;
//     }
//   }
// }

// export function mixinValue<T extends AbstractConstructor<any>>(base: T): HasValueCtor<T> & T;
// export function mixinValue<T extends Record<string, unknown>>() {
//   return class extends CellBase<any> {
//     get value() { return this.data.value; }
//   }
// }

// // type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
//

// export function mixinIcon<T extends AbstractConstructor<any>>(base: T): CellIconCtor & T;
// export function mixinIcon<T extends Constructor<any>>(base: T): CellIconCtor & T {
//   return class HasIcon extends base {
//     icon!: string;
//   }
// }
//
export function mixinIcon<T extends AbstractConstructor<any>>(base: T): CellIconCtor & T;
export function mixinIcon<T extends Constructor<any>>(base: T): CellIconCtor & T {
  return class extends base {
    get icon() { return this.data.icon; }
  }
}

//
// export function mixinDisabled<T extends AbstractConstructor<any>>(base: T): CanDisableCtor & T;
// export function mixinDisabled<T extends Constructor<any>>(base: T): CanDisableCtor & T {
//   return class extends base {
//     get disabled() { return this.data.disabled; }
//   };
// }
//
// type ex<T> = string & T;
// type test2<T> = ex<number> & boolean;
//
// export interface CanCallback {
//   callback: () => void;
//   returnValue: VALID_RETURN_TYPES;
// }
//
// export function mixinCallback<T extends AbstractConstructor<any>>(base: T): CanCallbackCtor & T;
// export function mixinCallback<T extends Constructor<any>>(base: T): CanCallbackCtor & T {
//   return class extends base {
//     callback() {
//       this.data.callback(this.data.returnValue);
//     }
//   }
// }
//

export type BasicCell = CellData<{ value: string }>;
export type IconCell = CellData<{ icon: string }>;

export function simpleStringCell(input: STRING_NUM) {
  return new Cell(CellComponent, {value: input});
}

export function stringCell(data: BasicCell) {
  return new Cell(CellComponent, data);
}

export function simpleIconCell(input: string) {
  return new Cell(CellIconComponent, {icon: input});
}

export function iconCell(data: IconCell) {
  return new Cell(CellIconComponent, data);
}

// export function iconCell(args: any) {
//   return new Cell(CellIconComponent, args);
// }
//
// // export function callbackCell(args: CallbackData<STRING_NUM>) {
// //   return new Cell(CellCallbackButtonComponent, args);
// // }
//
// type CallbackCell<T = null | undefined> = CallbackData<T> & CellIcon<T>
//
// // export function callbackIconCell(args: CallbackCell) {
// //   return new Cell(CellCallbackIconComponent, args);
// // }
//
// // export function daysCell(args: RequiredCellValue<STRING_NUM>) {
// //   return new Cell(CellDaysComponent, args);
// // }
//
// export type CELL_TYPES = STRING_NUM | null;
