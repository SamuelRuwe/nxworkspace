import { Type } from '@angular/core';

export interface TabInterface {
  component: Type<any>;
  label: string;
}

export class Tab implements TabInterface {
  constructor(public label: string, public component: Type<any>) {}
}
