import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'pg-layout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() title!: string;
  @Input() form!: FormControl | FormGroup;
  close$ = new Subject();

  options = [
    {key: "one", value: "1"},
    {key: "two", value: "2"},
    {key: "three", value: "3"}
  ]

  close(submit: boolean) {
    if (submit) {
      this.close$.next(this.form.value);
    } else {
      this.close$.next(null);
    }
  }
}
