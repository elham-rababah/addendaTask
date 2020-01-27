import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";

import { EUserActions, GetUser, setUserSuccess } from "../actions/user.action";
import { TweetsService } from "../../services/tweets.service";

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<any>(EUserActions.GetUser),
    switchMap(() => this.tweetsService.getAllTweets()),
    switchMap((userHttp) => of(new setUserSuccess(userHttp)))
  );

  constructor(
    private tweetsService: TweetsService,
    private _actions$: Actions,
    private _store: Store<any>
  ) {}
}
