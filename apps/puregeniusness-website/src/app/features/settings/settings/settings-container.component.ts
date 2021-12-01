import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/core.state';
import { selectEffectiveTheme } from '../../../core/settings/settings.selectors';
import { actionSettingsChangeTheme } from '../../../core/settings/settings.actions';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';

@Component({
  selector: 'pg-settings',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss']
})
export class SettingsContainerComponent implements OnInit {

  routeAnimationElements = ROUTE_ANIMATIONS_ELEMENTS;
  theme$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  changeTheme(theme: string) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }

}
