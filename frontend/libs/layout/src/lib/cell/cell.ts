import { Type } from '@angular/core';
import {
  CellCallbackButtonComponent,
  CellCallbackIconComponent,
  CellComponent,
  CellDaysComponent,
  CellIconComponent
} from './cell.component';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;
export type Constructor<T> = new(...args: any[]) => T;
export type AbstractConstructor<T> = abstract new (...args: any[]) => T;

export class Cell<T> {
  constructor(public component: Type<any>, public data: CellData<T>) {}
}

export interface CellData<T> {
  readonly value?: T;
}

export interface RequiredCellValue<T> extends CellData<T> {
  readonly value: T;
}

export interface CallbackData<T> extends CellData<T> {
  callback: (arg: VALID_RETURN_TYPES) => void;
  returnValue: VALID_RETURN_TYPES;
}

export interface CellIcon<T> extends CellData<T> {
  readonly icon: string;
}

export interface CanDisable {
  disabled: boolean;
}

export type HasValueCtor<T> = Constructor<RequiredCellValue<T>> & AbstractConstructor<RequiredCellValue<T>>;

export type CanDisableCtor = Constructor<CanDisable> & AbstractConstructor<CanDisable>;

export type CanCallbackCtor = Constructor<CanCallback> & AbstractConstructor<CanCallback>;

export type CellIconCtor<T> = Constructor<CellIcon<T>> & AbstractConstructor<CellIcon<T>>;

export function mixinValue<T extends AbstractConstructor<any>, U>(base: T): HasValueCtor<U> & T;
export function mixinValue<T extends Constructor<any>, U>(base: T): HasValueCtor<U> & T {
  return class extends base {
    get value() { return this.data.value; }
  }
}

export function mixinIcon<T extends AbstractConstructor<any>>(base: T): CellIconCtor<T> & T;
export function mixinIcon<T extends Constructor<any>>(base: T): CellIconCtor<T> & T {
  return class extends base {
    get icon() { return this.data.icon; }
  }
}

export function mixinDisabled<T extends AbstractConstructor<any>>(base: T): CanDisableCtor & T;
export function mixinDisabled<T extends Constructor<any>>(base: T): CanDisableCtor & T {
  return class extends base {
    get disabled() { return this.data.disabled; }
  };
}

export interface CanCallback {
  callback: () => void;
  returnValue: VALID_RETURN_TYPES;
}

export function mixinCallback<T extends AbstractConstructor<any>>(base: T): CanCallbackCtor & T;
export function mixinCallback<T extends Constructor<any>>(base: T): CanCallbackCtor & T {
  return class extends base {
    callback() {
      this.data.callback(this.data.returnValue);
    }
  }
}

export function stringCell(data: CellData<STRING_NUM>) {
  return new Cell(CellComponent, data);
}

export function iconCell(args: CellIcon<string>) {
  return new Cell(CellIconComponent, args);
}

export function callbackCell(args: CallbackData<STRING_NUM>) {
  return new Cell(CellCallbackButtonComponent, args);
}

type CallbackCell<T = null | undefined> = CallbackData<T> & CellIcon<T>

export function callbackIconCell(args: CallbackCell) {
  return new Cell(CellCallbackIconComponent, args);
}

export function daysCell(args: RequiredCellValue<STRING_NUM>) {
  return new Cell(CellDaysComponent, args);
}

export type CELL_TYPES = Cell<number> | Cell<STRING_NUM> | Cell<null>;
