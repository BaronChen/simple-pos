import { Action, combineReducers, ActionReducer } from '@ngrx/store';
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
