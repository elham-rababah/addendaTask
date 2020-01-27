import { Action } from '@ngrx/store';


export enum ETweetsActions {
  GetTweets = '[Tweets] Get Tweets',
  setTweets = '[Tweets] Get Tweets Success'
}



export class GetTweets implements Action {
  public readonly type = ETweetsActions.GetTweets;
  constructor() {}
}
export class setTweets implements Action {
  public readonly type = ETweetsActions.setTweets;
  constructor(public payload) {}
}

export type TweetsActions = GetTweets |setTweets;