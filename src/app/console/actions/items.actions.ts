import { Action } from '@ngrx/store';
import { IItem } from '../models/item';

export enum ItemsActionTypes {
  LoadItems = '[Basket] LoadItems',
  LoadItemsSuccess = '[Basket] LoadItemsSuccess',
  SelectItem = '[Basket] SelectItem',
}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
}

export class LoadItemsSuccess implements Action {
  readonly type = ItemsActionTypes.LoadItemsSuccess;
  payload: IItem[];
}

export class SelectItem implements Action {
  readonly type = ItemsActionTypes.SelectItem;
  newItemId: string;
}

export type ConsoleActions = LoadItems | LoadItemsSuccess |SelectItem;
