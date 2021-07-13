import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appLoaded } from './state/items/items.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  NavOptions = {
    routes: [
      {name: 'Books', route: '/books'},
      {name: 'Counter', route: '/counter'},
      {name: 'Pokemon', route: '/pokemon'},
      {name: 'Items', route: '/items'}
    ]
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(appLoaded());
  }

}
