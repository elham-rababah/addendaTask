import { initializeTweetsState } from "./tweets.state";

export const initialAppState = {
    tweet: initializeTweetsState,
  };
  
  export function getInitialState() {
    return initialAppState;
  }