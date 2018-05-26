import { Action } from '@ngrx/store';
import { IBasketItem, IBasketItemDetail } from '../models/basket-item';

export enum BasketActionTypes {
  AddOrUpdateItemInBasket = '[Basket] AddOrUpdateItemInBasket',
  RemoveItemFromBasket = '[Basket] RemoveItemFromBasket',
  ClearBasket = '[Basket] ClearBasket',
  SubmitOrder = '[Basket] SubmitOrder',
  ShowReceipt = '[Basket] ShowReceipt',
}

export class AddOrUpdateItemInBasket implements Action {
  readonly type = BasketActionTypes.AddOrUpdateItemInBasket;
  constructor(public payload: IBasketItem) {}
}

export class RemoveItemFromBasket implements Action {
  readonly type = BasketActionTypes.RemoveItemFromBasket;
  constructor(public payload: string) {}
}

export class ClearBasket implements Action {
  readonly type = BasketActionTypes.ClearBasket;
}

export class SubmitOrder implements Action {
  readonly type = BasketActionTypes.SubmitOrder;
}

export class ShowReceipt implements Action {
  readonly type = BasketActionTypes.ShowReceipt;
  constructor(public amount: number, public items: IBasketItemDetail[]) { }
}

export type BasketAction =  AddOrUpdateItemInBasket | RemoveItemFromBasket | ClearBasket | SubmitOrder | ShowReceipt;
