import { Type } from '@angular/core';
import {
  CellCallbackIconComponent,
  CellComponent,
  CellDateComponent,
  CellDaysComponent,
  CellIconComponent, CellOptionalIconComponent
} from './cell.component';

export type STRING_NUM = string | number;
export type VALID_RETURN_TYPES = string | number;

export class Cell<T> {
  constructor(public component: Type<any>, public data: T) {}
}

export type CellData<T extends unknown> = T;
type ReadOnlyValue = { readonly value: STRING_NUM }
type Icon = { readonly icon: string }
type Date = { readonly value: string; }
type ShouldDisplay = { readonly shouldDisplay: boolean; }
type CallbackData = {
  callback: (val?: any) => void;
  returnValue: VALID_RETURN_TYPES;
}
type CallbackIcon = CallbackData & Icon;

export type BasicCell = CellData<ReadOnlyValue>;
export type IconCell = CellData<Icon>;
export type OptionalIcon = CellData<Icon & ShouldDisplay>;
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

export function daysCell(data: BasicCell) {
  return new Cell(CellDaysComponent, data);
}

export function optionalIconCell(data: OptionalIcon) {
  return new Cell(CellOptionalIconComponent, data);
}
