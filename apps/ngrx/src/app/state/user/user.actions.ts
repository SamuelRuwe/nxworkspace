import { createAction, props } from '@ngrx/store';
import { UserModel } from './user.models';

export const UserActions = {
  loadAll: createAction('[UserComponent] Load All'),
  loadAllSuccess: createAction(
    '[UserAPI] Load All Success',
    props<{ users: Array<UserModel> }>()
  ),
  editUser: createAction(
    '[UserComponent] Edit User',
    props<{ user: UserModel }>()
  ),
  editUserSuccess: createAction(
    '[UserAPI] Edit User Success',
    props<{ user: UserModel }>()
  ),
  createUser: createAction('[UserComponent] Create User'),
  createUserSuccess: createAction(
    '[UserAPI] Create User Success',
    props<{ user: UserModel }>()
  ),
  deleteUser: createAction(
    '[UserComponent] Delete User',
    props<{ id: number }>()
  ),
  deleteUserSuccess: createAction(
    '[UserAPI] Delete User Success',
    props<{ id: number }>()
  )
}
