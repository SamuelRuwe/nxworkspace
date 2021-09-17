import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Observable } from 'rxjs';
import { User } from '../state/user/user.models';
import { selectAllUsers } from '../state/user/user.selector';
import { UserActions } from '../state/user/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$!: Observable<Array<User>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadAll());
    this.users$ = this.store.select(selectAllUsers);
  }

}
