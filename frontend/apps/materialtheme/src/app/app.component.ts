import { Component } from '@angular/core';

const temp1 = `<p>Hello {{title}}</p>`;
const temp2 = `<p>I am good programmer</p>`;

@Component({
  selector: 'nx-workspace-root',
  template: temp1 + temp2,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Example Title';
}

/** ToDo
 * Dockerize wasm
 * Add more wasm
 * Dockerize application
 * ???
 * Profit
 */
