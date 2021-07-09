import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openForm() {
    this.dialog.open(FormComponent, {
      height: '800px',
      width: '800px'
    });
  }

}
