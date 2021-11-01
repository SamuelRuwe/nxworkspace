import { Component } from '@angular/core';
import { DropdownOptions } from '@nx-workspace/forms';
import { DynamicDialogService } from '../../services/dynamic-dialog.service';
import { LanguageDropdownComponent } from '../../../forms/components/language-dropdown/language-dropdown.component';

@Component({
  selector: 'pg-layout-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent {

  options!: Array<DropdownOptions>;

  constructor(private dynamicDialogService: DynamicDialogService) {}

  showForm() {
    const result = this.dynamicDialogService.createDialog(LanguageDropdownComponent);
    result.subscribe((data => console.log(data)));
  }

}
