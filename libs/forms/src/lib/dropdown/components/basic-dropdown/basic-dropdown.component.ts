import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pg-forms-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.css']
})
export class BasicDropdownComponent {
  @Input() placeholder?: string;
  @Input() control!: FormControl;
  @Input() options!: Array<{ key: string, value: string }>;
}
