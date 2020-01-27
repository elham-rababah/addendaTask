import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { tweetsReducers } from './tweets.reducers';

export const appReducers: ActionReducerMap<any, any> = {
  router: routerReducer,
  tweets: tweetsReducers,
};