import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'pg-layout-example',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.css']
})
export class LanguageDropdownComponent {

  close$ = new Subject();

  control = new FormControl();

  options = [
    {key: "English", value: "English"},
    {key: "Mandarin Chinese", value: "Mandarin Chinese"},
    {key: "Hindi", value: "Hindi"},
    {key: "Spanish", value: "Spanish"},
    {key: "Standard Arabic", value: "Standard Arabic"},
    {key: "Bengali", value: "Bengali"},
    {key: "French", value: "French"},
    {key: "Russian", value: "Russian"},
    {key: "Portuguese", value: "Portuguese"},
    {key: "Urdu", value: "Urdu"}
  ]

  close($event: boolean) {
    if ($event) this.close$.next(this.control.value);
    else this.close$.next(undefined)
  }
}
