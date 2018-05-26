import { Action } from '@ngrx/store';
import { ReceiptActions, ReceiptActionTypes, UpdateAmount } from '../actions/receipt.actions';

export interface IReceiptState {
  readonly amount: number;
}

export const initialState: IReceiptState = {
  amount: 0
};

export function reducer(state = initialState, action: ReceiptActions): IReceiptState {
  switch (action.type) {
    case ReceiptActionTypes.UpdateAmount:
      return Object.assign({}, state, {amount: action.payload});
    case ReceiptActionTypes.ShowReceipt:
    case ReceiptActionTypes.BackToConsole:
    default:
      return state;
  }
}
