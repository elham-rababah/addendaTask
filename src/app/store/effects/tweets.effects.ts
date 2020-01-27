import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";

import { ETweetsActions, GetTweets, setTweets } from "../actions/tweets.action";
import { TweetsService } from "../../services/tweets.service";

@Injectable()
export class TweetsEffects {
  @Effect()
  getTweets$ = this._actions$.pipe(
    ofType<any>(ETweetsActions.GetTweets),
    switchMap(() => this.tweetsService.getAllTweets()),
    switchMap((tweetsHttp) => of(new setTweets(tweetsHttp)))
  );

  constructor(
    private tweetsService: TweetsService,
    private _actions$: Actions,
    private _store: Store<any>
  ) {}
}
