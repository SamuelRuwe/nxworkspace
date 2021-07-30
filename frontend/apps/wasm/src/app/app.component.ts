import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-root',
  template: `
    <nx-workspace-navbar [navOptions]="navOptions"></nx-workspace-navbar>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  navOptions = {

    routes: [
      {name: 'Basic Wasm', route: '/basicwasm'},
      {name: 'Hello World', route: '/helloworld'},
      {name: 'LL WASM', route: '/wasm'},
      {name: 'Import Object WASM', route: '/importobj'},
      {name: 'Memory Object', route: 'memobj'},
      {name: 'QuickSort', route: 'quicksort'},
      {name: 'Matrix', route: 'matrix'},
      {name: 'Webp', route: 'webp'}
    ]
  }

}
