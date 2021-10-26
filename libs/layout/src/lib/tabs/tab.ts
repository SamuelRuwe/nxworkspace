import { Type } from '@angular/core';

export class Tab {
  constructor(public label: string, public component: Type<any>) {}
}
