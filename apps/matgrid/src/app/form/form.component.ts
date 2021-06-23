import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'nx-workspace-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent {

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    controlOne: '',
    controlTwo: '',
    controlThree: '',
    controlFour: ''
  });
}
