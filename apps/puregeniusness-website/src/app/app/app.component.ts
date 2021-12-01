import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../core/core.state';
import { Observable } from 'rxjs';
import { selectEffectiveTheme } from '../core/settings/settings.selectors';
import { routeAnimations } from '../core/animations/route.animations';

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  logo = 'assets/logo.png';
  navigation = [
    { link: 'about', label: 'about' },
    { link: 'wasm', label: 'wasm' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'settings' }
  ];

  theme$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

}
