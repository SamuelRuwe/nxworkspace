export interface ColumnModel<T> {
  columnDef: string;
  header: string;
  cell: (...args: any[]) => any;
  isSortable?: boolean;
}

export class Column<T> implements ColumnModel<T> {
  columnDef: ColumnModel<T>['columnDef'];
  header: ColumnModel<T>['header'];
  cell: ColumnModel<T>['cell'];
  isSortable: ColumnModel<T>['isSortable'];

  constructor(opts: ColumnModel<T>) {
    this.columnDef = opts.columnDef;
    this.header = opts.header;
    this.cell = opts.cell;
    this.isSortable = opts.isSortable ?? true;
  }

}

export type ExpandedRowGenerator<T> = (arg: T) => any;
