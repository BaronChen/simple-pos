import { IFlatArray, getEmptyFlatArray, getFlatArray } from '../../shared/models/flat-array';
import { IItem } from '../models/item';
import { ItemsActionTypes, LoadItems, LoadItemsSuccess, ItemsAction } from '../actions/items.actions';

export interface IItemState extends IFlatArray<IItem> {}

export const initialState: IItemState = getEmptyFlatArray<IItem>();

export function reducer(state = initialState, action: ItemsAction): IItemState {
  switch (action.type) {
    case ItemsActionTypes.LoadItemsSuccess:
      return getFlatArray(action.payload);
    case ItemsActionTypes.LoadItems:
    default:
      return state;
  }
}
