import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../core/core.state';
import { Observable } from 'rxjs';
import { selectEffectiveTheme } from '../core/settings/settings.selectors';
import { actionSettingsChangeTheme } from '../core/settings/settings.actions';

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  theme$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  changeTheme(theme: string) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }
}
