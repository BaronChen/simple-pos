import { Action } from '@ngrx/store';

export enum BasketActionTypes {
  UpdateTotalPrice = '[Basket] UpdateTotalPrice',
  UpdateSelectedItems = '[Basket] UpdateSelectedItems',
  ClearBasket = '[Basket] ClearBasket',
  SubmitOrder = '[Basket] SubmitOrder'
}

export class UpdateTotalPrice implements Action {
  readonly type = BasketActionTypes.UpdateTotalPrice;
  payload: number;
}

export class UpdateSelectedItems implements Action {
  readonly type = BasketActionTypes.UpdateSelectedItems;
  newItemId: string;
}

export class ClearBasket implements Action {
  readonly type = BasketActionTypes.ClearBasket;
}

export class SubmitOrder implements Action {
  readonly type = BasketActionTypes.SubmitOrder;
}

export type ConsoleActions = UpdateTotalPrice | UpdateSelectedItems | ClearBasket | SubmitOrder;
