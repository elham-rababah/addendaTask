import { initializeUserState } from "./user.state";

export const initialAppState = {
    user: initializeUserState,
  };
  
  export function getInitialState() {
    return initialAppState;
  }