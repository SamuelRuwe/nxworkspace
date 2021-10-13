import { Type } from '@angular/core';
import { CellComponent, CellIconComponent } from './cell.component';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;

export class Cell<T> {
  constructor(public component: Type<any>, public data: T) {}
}

export type CellData<T extends unknown> = T;
type ReadOnlyValue = { readonly value: STRING_NUM }
type Icon = { readonly icon: string }
type CallbackData = {
  callback: (arg: VALID_RETURN_TYPES) => void;
  returnValue: VALID_RETURN_TYPES;
}

export type BasicCell = CellData<ReadOnlyValue>;
export type IconCell = CellData<Icon>;
export type CallbackCell = CellData<CallbackData>;

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

// // export function callbackCell(args: CallbackData<STRING_NUM>) {
// //   return new Cell(CellCallbackButtonComponent, args);
// // }
//
// // export function callbackIconCell(args: CallbackCell) {
// //   return new Cell(CellCallbackIconComponent, args);
// // }
//
// // export function daysCell(args: RequiredCellValue<STRING_NUM>) {
// //   return new Cell(CellDaysComponent, args);
// // }
