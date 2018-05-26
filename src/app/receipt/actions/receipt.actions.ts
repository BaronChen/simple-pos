import { Action } from '@ngrx/store';

export enum ReceiptActionTypes {
  ShowReceipt = '[Receipt] ShowReceipt',
  BackToConsole = '[Receipt] BackToConsole',
  UpdateAmount = '[Receipt] UpdateAmount',
}

export class ShowReceipt implements Action {
  readonly type = ReceiptActionTypes.ShowReceipt;
}

export class BackToConsole implements Action {
  readonly type = ReceiptActionTypes.BackToConsole;
}

export class UpdateAmount implements Action {
  readonly type = ReceiptActionTypes.UpdateAmount;
  constructor(public payload: number) {}
}

export type ReceiptActions = ShowReceipt | BackToConsole | UpdateAmount;
