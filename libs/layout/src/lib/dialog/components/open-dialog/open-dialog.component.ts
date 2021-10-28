import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BasicDropdownComponent, DropdownOptions } from '@nx-workspace/forms';
import { DynamicDialogComponent } from '../../dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'pg-layout-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent {

  num!: string;
  placeholder?: string;
  control!: FormControl;
  options!: Array<DropdownOptions>;

  constructor(private dialog: MatDialog) { }

  showForm() {
    const dialogRef = this.dialog.open(BasicDropdownComponent, {
      data: {
        placeholder: this.placeholder,
        control: this.control,
        options: this.options
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.num = result;
    });
  }

  showForm2ElectricBoogaloo() {
    const dialogRef = this.dialog.open(DynamicDialogComponent, {
      data: {
        component: BasicDropdownComponent,
        placeholder: this.placeholder,
        control: this.control,
        options: this.options
      }
    });

  }
}
