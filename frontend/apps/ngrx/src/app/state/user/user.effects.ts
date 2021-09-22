import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from './user.actions';
import { exhaustMap, filter } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../user-dialog/user-dialog.component';
import { UserModel } from './user.models';

@Injectable({providedIn: 'root'})
export class UserEffects {
  constructor(private userService: UserService, private actions$: Actions, private dialog: MatDialog) {}

  loadAllUsers = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadAll),
    exhaustMap(() => this.userService.getAll().pipe(
      map(users => UserActions.loadAllSuccess({users}))
    ))
  ));

  editUser = createEffect(() => this.actions$.pipe(
    ofType(UserActions.editUser),
    exhaustMap(action => this.dialog.open(UserDialogComponent, {data: action.user}).afterClosed()),
    filter(user => !!user),
    exhaustMap(user => this.userService.editUser(user).pipe(
      map((user: UserModel) => UserActions.editUserSuccess({user}))
    ))
  ));

  createUser = createEffect(() => this.actions$.pipe(
    ofType(UserActions.createUser),
    exhaustMap(() => this.dialog.open(UserDialogComponent).afterClosed()),
    filter(user => !!user),
    exhaustMap(user => this.userService.addUser(user).pipe(
      map((user: UserModel) => UserActions.createUserSuccess({user}))
    ))
  ));

  deleteUser = createEffect(() => this.actions$.pipe(
    ofType(UserActions.deleteUser),
    exhaustMap(action => this.userService.deleteUser(action.id).pipe(
      map(id => UserActions.deleteUserSuccess({id}))))
  ));
}
