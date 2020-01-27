import { createSelector } from '@ngrx/store';

const selectTweets = (state) => state;

export const selectTweetsList = createSelector(
  selectTweets,
  (state:any) => state.tweets.tweet
);