import {createReducer, on} from "@ngrx/store";
import {ActionEx, UserStateActionTypes} from "./user-state.actions";

export const initialState: UserState = {
  userName: ''
};

export function UserStateReducer(state: UserState = initialState, action: ActionEx): UserState {
  console.log('Inside UserStateReducer, action: ' +action.type);
  switch (action.type) {
    case UserStateActionTypes.Save:
      console.log('Saving username: ' + action.payload.userName);
      return {
        userName: action.payload.userName
      }
    case UserStateActionTypes.Clear:
      return {
        userName: null
      };
    case UserStateActionTypes.Get:
      state.userName = action.payload;
      return {
        userName: state.userName
      }
    default:
      return state;
  }
}
export class UserState {
  userName: String;
}
