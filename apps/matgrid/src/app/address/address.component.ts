import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'nx-workspace-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class AddressComponent {}

/**
 * This works with template driven forms, but not with reactive forms
 */
