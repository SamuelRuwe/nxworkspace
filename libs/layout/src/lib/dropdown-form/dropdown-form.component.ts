import { Component } from '@angular/core';

@Component({
  selector: 'pg-layout-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.css']
})

export class DropdownFormComponent {
  iterables = ["english", "spanish", "klingon", "ruby", "pre-ES6 Javascript"];
  selectedLanguage = "";
}
