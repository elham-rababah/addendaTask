import { EUserActions } from './../actions/user.action';
import { UserActions } from '../actions/user.action';
import { initializeUserState } from '../state/user.state';

export const userReducers = (
  state = initializeUserState,
  action: UserActions
) => {
  switch (action.type) {
    case EUserActions.GetUser: {
      return {
        ...state,
        user: action
      };
    }
    case EUserActions.setUserSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};