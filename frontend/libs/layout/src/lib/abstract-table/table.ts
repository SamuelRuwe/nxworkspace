// import { CELL_TYPES } from '../cell/cell';

export interface ColumnModel<T> {
  columnDef: string;
  header: string;
  // cell: (...args: any[]) => CELL_TYPES;
  cell: (...args: any[]) => any;
  isSortable?: boolean;
}

export class Column<T> implements ColumnModel<T> {
  columnDef: string;
  header: string;
  cell: (arg?: T) => any;
  // cell: (arg?: T) => CELL_TYPES;
  isSortable: boolean;

  constructor(opts: ColumnModel<T>) {
    this.columnDef = opts.columnDef;
    this.header = opts.header;
    this.cell = opts.cell;
    this.isSortable = opts.isSortable ?? true;
  }

}
