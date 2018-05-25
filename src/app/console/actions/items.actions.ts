import { Action } from '@ngrx/store';
import { IItem } from '../models/item';

export enum ItemsActionTypes {
  LoadItems = '[Items] LoadItems',
  LoadItemsSuccess = '[Items] LoadItemsSuccess',
  SelectItem = '[Items] SelectItem',
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
  payload: string;
}

export type ItemsAction = LoadItems | LoadItemsSuccess |SelectItem;
