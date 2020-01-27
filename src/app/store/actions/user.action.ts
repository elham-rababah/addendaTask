import { Action } from '@ngrx/store';


export enum EUserActions {
  GetUser = '[User] Get User',
  setUserSuccess = '[User] Get User Success'
}



export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor() {}
}
export class setUserSuccess implements Action {
  public readonly type = EUserActions.setUserSuccess;
  constructor(public payload) {}
}

export type UserActions = GetUser |setUserSuccess;