import { Type } from '@angular/core';

export class Cell {
  constructor(public component: Type<any>, public data: any) {}
}
