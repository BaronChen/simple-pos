import { Action } from '@ngrx/store';
import { ConsoleActions, ConsoleActionTypes } from '../actions/console.actions';

export interface State {
  test: string;
}

export const initialState: State = {
  test: 'test'
};

export function reducer(state = initialState, action: ConsoleActions): State {
  switch (action.type) {

    case ConsoleActionTypes.LoadItems:
      return state;


    default:
      return state;
  }
}
