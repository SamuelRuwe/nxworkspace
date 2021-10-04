import { Type } from '@angular/core';
import {
  CellCallbackButtonComponent,
  CellCallbackIconComponent,
  CellComponent,
  CellIconComponent
} from './cell.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;
export type Constructor<T> = new(...args: any[]) => T;
export type AbstractConstructor<T> = abstract new (...args: any[]) => T;

export class Cell<T> {
  constructor(public component: Type<any>, public data: CellData<T>) {}
}

export interface CellData<T> {value: T, icon?: string}

export interface CallbackData<T> extends CellData<T> {
  callback: (arg: VALID_RETURN_TYPES) => void;
  returnValue: VALID_RETURN_TYPES;
}

export interface CellIcon {
  icon: string;
}

export interface CanDisable {
  disabled: boolean;
}

export type CanDisableCtor = Constructor<CanDisable> & AbstractConstructor<CanDisable>;

export type CanCallbackCtor = Constructor<CanCallback> & AbstractConstructor<CanCallback>;

export type CellIconCtor = Constructor<CellIcon> & AbstractConstructor<CellIcon>;

export function mixinIcon<T extends AbstractConstructor<any>>(base: T): CellIconCtor & T;
export function mixinIcon<T extends Constructor<any>>(base: T): CellIconCtor & T {
  return class extends base {
    private _icon = '';

    get icon() { return this._icon; }

    set icon(value: string) { this._icon = value;}
  }
}

export function mixinDisabled<T extends AbstractConstructor<any>>(base: T): CanDisableCtor & T;
export function mixinDisabled<T extends Constructor<any>>(base: T): CanDisableCtor & T {
  return class extends base {
    private _disabled = false;

    get disabled() { return this._disabled; }

    set disabled(value: any) { this._disabled = coerceBooleanProperty(value); }
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

export function iconCell(args: CellData<string>) {
  return new Cell(CellIconComponent, args);
}

export function callbackCell(args: CallbackData<STRING_NUM>) {
  return new Cell(CellCallbackButtonComponent, args);
}

export function callbackIconCell(args: CallbackData<STRING_NUM>) {
  return new Cell(CellCallbackIconComponent, args);
}

export type CELL_TYPES = Cell<STRING_NUM>;
