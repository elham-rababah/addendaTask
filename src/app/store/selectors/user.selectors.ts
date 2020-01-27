import { createSelector } from '@ngrx/store';

const selectUsers = (state) => state;

export const selectUserList = createSelector(
  selectUsers,
  (state:any) => state.users.user
);

// export const selectSelectedUser = createSelector(
//   selectUsers,
//   (state: any) => {console.log(state);state.user}
// );