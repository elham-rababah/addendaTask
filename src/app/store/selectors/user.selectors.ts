import { createSelector } from '@ngrx/store';

const selectUsers = (state) => state.user;

export const selectUserList = createSelector(
  selectUsers,
  (state:any) => state.user
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: any) => state.user
);