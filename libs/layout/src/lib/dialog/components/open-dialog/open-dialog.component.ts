import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasicDropdownComponent, DropdownOptions } from '@nx-workspace/forms';
import { DynamicDialogService } from '../../services/dynamic-dialog.service';
import { ExampleComponent } from '../../../forms/components/example/example.component';

@Component({
  selector: 'pg-layout-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent {

  placeholder?: string;
  control!: FormControl;
  options!: Array<DropdownOptions>;

  constructor(private dynamicDialogService: DynamicDialogService) {}

  showForm() {
    const result = this.dynamicDialogService.createDialog(ExampleComponent);
    result.subscribe((data => console.log(data)));
  }

  showForm2ElectricBoogaloo() {
    this.dynamicDialogService.createDialog(BasicDropdownComponent, {
      placeholder: this.placeholder,
      control: this.control,
      options: this.options
    });

  }
}
