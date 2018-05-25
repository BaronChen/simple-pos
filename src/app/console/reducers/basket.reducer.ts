import { BasketAction, BasketActionTypes } from '../actions/basket.actions';
import { IBasketItem } from '../models/basket-item';
import { IFlatArray, getEmptyFlatArray, addOrUpdateItem, removeItem } from '../../shared/models/flat-array';

export interface IBasketState {
  readonly totalPrice: number;
  readonly basketItems: IFlatArray<IBasketItem>;
}

export const initialState: IBasketState = {
  totalPrice: 0,
  basketItems: getEmptyFlatArray<IBasketItem>()
};

export function reducer(state = initialState, action: BasketAction): IBasketState {
  switch (action.type) {
    case BasketActionTypes.UpdateTotalPrice:
      return Object.assign({}, state, { totalPrice: action.payload });
    case BasketActionTypes.AddOrUpdateItemInBasket:
      return Object.assign({}, state, { basketItems: addOrUpdateItem(state.basketItems, action.payload) });
    case BasketActionTypes.RemoveItemFromBasket:
      return Object.assign({}, state, { basketItems: removeItem(state.basketItems, action.payload) });
    case BasketActionTypes.ClearBasket:
    case BasketActionTypes.SubmitOrder:
    default:
      return state;
  }
}
