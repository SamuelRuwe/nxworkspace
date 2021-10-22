import { MatTableDataSource } from '@angular/material/table';

export interface Table<T> {
  dataSource: MatTableDataSource<T>;
}
