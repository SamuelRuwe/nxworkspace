import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DropdownOptions } from '../../dropdown.interface';

interface DialogData {
  placeholder?: string;
  control: FormControl;
  options: Array<DropdownOptions>;
}

@Component({
  selector: 'pg-forms-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.css']
})
export class BasicDropdownComponent{
  @Input() placeholder?: string;
  @Input() control: FormControl;
  @Input() options: Array<DropdownOptions>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.placeholder = data.placeholder;
    this.control = data.control;
    this.options = data.options;
  }

}