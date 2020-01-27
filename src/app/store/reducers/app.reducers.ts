import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducers';

export const appReducers: ActionReducerMap<any, any> = {
  router: routerReducer,
  users: userReducers,
};