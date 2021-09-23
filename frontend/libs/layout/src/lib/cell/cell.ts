import { Type } from '@angular/core';
import {
  CellCallbackButtonComponent,
  CellCallbackIconComponent,
  CellComponent,
  CellIconComponent
} from './cell.component';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;

export class Cell<T> {
  constructor(public component: Type<any>, public data: CellData<T>) {}
}

export interface CellData<T> {value: T}

export interface CallbackData<T> extends CellData<T> {
  callback: (arg: VALID_RETURN_TYPES) => void;
  returnValue: VALID_RETURN_TYPES;
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
