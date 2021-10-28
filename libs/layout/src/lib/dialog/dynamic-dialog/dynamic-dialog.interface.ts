import { Type } from '@angular/core';

export type DynamicDialogData<T> = { [x: string]: T[keyof T] } & { component: Type<any> };
