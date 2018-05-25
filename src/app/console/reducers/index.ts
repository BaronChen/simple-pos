import { Action, combineReducers, ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { IFlatArray } from '../../shared/models/flat-array';
import { IItem } from '../models/item';
import * as fromItems from './items.reducer';
import * as fromBasket from './basket.reducer';

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
