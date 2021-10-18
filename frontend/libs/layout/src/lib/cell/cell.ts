import { Type } from '@angular/core';
import { CellCallbackIconComponent, CellComponent, CellDateComponent, CellIconComponent } from './cell.component';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;

export class Cell<T> {
  constructor(public component: Type<any>, public data: T) {}
}

export type CellData<T extends unknown> = T;
type ReadOnlyValue = { readonly value: STRING_NUM }
type Icon = { readonly icon: string }
type Date = { readonly value: string; }
type CallbackData = {
  callback: () => void;
  returnValue: VALID_RETURN_TYPES;
}
type CallbackIcon = CallbackData & Icon;

export type BasicCell = CellData<ReadOnlyValue>;
export type IconCell = CellData<Icon>;
export type CallbackCell = CellData<CallbackData>;
export type DateCell = CellData<Date>;
export type CallbackIconCell = CellData<CallbackIcon>;

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

export function dateCell(data: DateCell) {
  return new Cell(CellDateComponent, data);
}

export function callbackIconCell(data: CallbackIconCell) {
  return new Cell(CellCallbackIconComponent, data);
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
