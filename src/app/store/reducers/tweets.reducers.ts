import { ETweetsActions } from '../actions/tweets.action';
import { TweetsActions } from '../actions/tweets.action';
import { initializeTweetsState } from '../state/tweets.state';

export const tweetsReducers = (
  state = initializeTweetsState,
  action: TweetsActions
) => {
  switch (action.type) {
    case ETweetsActions.GetTweets: {
      return {
        ...state,
        tweet: action
      };
    }
    case ETweetsActions.setTweets: {
      return {
        ...state,
        tweet: action.payload
      };
    }
    default:
      return state;
  }
};