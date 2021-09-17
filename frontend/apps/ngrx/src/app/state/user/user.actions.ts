import { createAction, props } from '@ngrx/store';
import { User } from './user.models';

export const UserActions = {
  loadAll: createAction('[UserComponent] Load All'),
  loadAllSuccess: createAction(
    '[UserAPI] Load All Success',
    props<{ users: Array<User> }>()
  )
}
