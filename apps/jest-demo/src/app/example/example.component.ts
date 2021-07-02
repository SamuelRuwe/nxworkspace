import { Component, Input } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'nx-workspace-example',
  template: `<h1>{{input}}</h1>`,
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  @Input() input!: string;

  constructor(private _exampleService: ExampleService) { }

  getDataFromService() {
    return this._exampleService.getData();
  }

}
