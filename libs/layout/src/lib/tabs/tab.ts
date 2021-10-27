import { Type } from '@angular/core';

export interface TabInterface<T> {
  component: Type<any>;
  label: string;
  data?: { [x: string]: T };
}

export type TabData<T> = TabInterface<T>['data'];

export class Tab<T> implements TabInterface<T> {
  constructor(public label: string, public component: Type<any>, public data?: TabData<T>) {}
}
