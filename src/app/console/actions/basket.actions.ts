import { Action } from '@ngrx/store';
import { IBasketItem } from '../models/basket-item';

export enum BasketActionTypes {
  UpdateTotalPrice = '[Basket] UpdateTotalPrice',
  AddOrUpdateItemInBasket = '[Basket] AddOrUpdateItemInBasket',
  RemoveItemFromBasket = '[Basket] RemoveItemFromBasket',
  ClearBasket = '[Basket] ClearBasket',
  SubmitOrder = '[Basket] SubmitOrder'
}

export class UpdateTotalPrice implements Action {
  readonly type = BasketActionTypes.UpdateTotalPrice;
  payload: number;
}

export class AddOrUpdateItemInBasket implements Action {
  readonly type = BasketActionTypes.AddOrUpdateItemInBasket;
  payload: IBasketItem;
}

export class RemoveItemFromBasket implements Action {
  readonly type = BasketActionTypes.RemoveItemFromBasket;
  payload: string;
}

export class ClearBasket implements Action {
  readonly type = BasketActionTypes.ClearBasket;
}

export class SubmitOrder implements Action {
  readonly type = BasketActionTypes.SubmitOrder;
}

export type BasketAction = UpdateTotalPrice | AddOrUpdateItemInBasket | RemoveItemFromBasket | ClearBasket | SubmitOrder;
