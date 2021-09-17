import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from './user.actions';
import { exhaustMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  loadAllUsers = createEffect(() => this.actions$.pipe(
      ofType(UserActions.loadAll),
      exhaustMap(() => this.userService.getAll().pipe(
        map(users => UserActions.loadAllSuccess({users}))
      ))
    )
  );
}
