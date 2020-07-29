import {Action, createAction} from "@ngrx/store";

export enum UserStateActionTypes {
  Save = '[UserState Component] Save',
  Get = '[UserState Component] Get',
  Clear = '[UserState Component] Clear'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class StoreState implements ActionEx {
  readonly type = UserStateActionTypes.Save;
  constructor(public payload: any) {
  }
}
export class ClearState implements ActionEx {
  readonly type = UserStateActionTypes.Clear;
  constructor(public payload: any) {
  }
}
export class GetState implements ActionEx {
  readonly type = UserStateActionTypes.Get;
  constructor() {
  }
  payload: any;
}
