import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  NavOptions = {
    routes: [
      {name: 'Books', route: '/books'},
      {name: 'Counter', route: '/counter'},
      {name: 'Pokemon', route: '/pokemon'}
    ]
  }

}
