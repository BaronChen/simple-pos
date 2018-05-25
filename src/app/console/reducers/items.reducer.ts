import { Action } from '@ngrx/store';
import { IFlatArray, getEmptyFlatArray } from '../../shared/models/flat-array';
import { IItem } from '../models/item';


export interface IItemState extends IFlatArray<IItem> {}

export const initialState: IItemState = getEmptyFlatArray<IItem>();

export function reducer(state = initialState, action: Action): IItemState {
  switch (action.type) {
    default:
      return state;
  }
}
