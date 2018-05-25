import { Action, combineReducers, ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { IFlatArray } from '../../shared/models/flat-array';
import { IItem } from '../models/item';
import * as fromItems from './items.reducer';
import * as fromBasket from './basket.reducer';
import { IBasketItemDetail } from '../models/basket-item';

export interface IConsoleState {
  items: fromItems.IItemState;
  basket: fromBasket.IBasketState;
}

const reducers = {
  items: fromItems.reducer,
  basket: fromBasket.reducer
};

export const reducer: ActionReducer<IConsoleState> = combineReducers(reducers);

export const getConsoleState = createFeatureSelector<IConsoleState>('console');

export const getItemsState = createSelector(
    getConsoleState,
    state => state.items
);

export const getItems = createSelector(
  getItemsState,
  state => state.ids.map(x => state.byId[x])
);

export const getBasketState = createSelector(
    getConsoleState,
    state => state.basket
);

export const getBasketItemDetails = createSelector(
  getItemsState, getBasketState,
  (itemsState, basketState) => basketState.basketItems.ids.map((x: string): IBasketItemDetail => ({
    id: x,
    name: itemsState.byId[x].name,
    quantity: basketState.basketItems.byId[x].quantity,
    subtotal: itemsState.byId[x].price * basketState.basketItems.byId[x].quantity
  }))
);
