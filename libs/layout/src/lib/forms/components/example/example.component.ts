import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'pg-layout-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  close$ = new Subject();

  control = new FormControl();
  options = [
    {key: "one", value: "1"},
    {key: "two", value: "2"},
    {key: "three", value: "3"}
  ]

  close($event: any) {
    if ($event) this.close$.next(this.control.value);
    else this.close$.next(undefined)
  }
}
