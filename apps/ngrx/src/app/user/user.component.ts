import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Observable } from 'rxjs';
import { UserModel } from '../state/user/user.models';
import { selectAllUsers } from '../state/user/user.selector';
import { UserActions } from '../state/user/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  users$!: Observable<Array<UserModel>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadAll());
    this.users$ = this.store.select(selectAllUsers);
  }

  editUser(user: UserModel) {
    this.store.dispatch(UserActions.editUser({user}));
  }

  createUser() {
    this.store.dispatch(UserActions.createUser());
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({id}));
  }

}
