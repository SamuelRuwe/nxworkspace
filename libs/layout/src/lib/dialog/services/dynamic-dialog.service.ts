import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';
import { take } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DynamicDialogService {

  constructor(private dialog: MatDialog) {}

  createDialog<T extends { [x: string]: unknown }>(component: Type<any>, props?: T) {
    const data = {component, ...props};
    return this.dialog.open(DynamicDialogComponent, {data}).afterClosed().pipe(take(1));
  }

}