import { InjectionToken } from '@angular/core';
import { Table } from './table.interface';

export const TABLE = new InjectionToken<Table<unknown>>('Table');
