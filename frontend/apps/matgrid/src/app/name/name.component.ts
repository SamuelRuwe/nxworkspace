import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'nx-workspace-name',
  template: `
    <input type="text" formControlName="firstName">
  `,
  styleUrls: ['./name.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class NameComponent {}

/**
 * Trying to figure out how to access directives on the child within the child.
 * I can't remember why I wanted to do this though.
 */
