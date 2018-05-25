import { Action } from '@ngrx/store';

export enum ConsoleActionTypes {
  LoadItems = '[Console] LoadItems'
}

export class LoadItems implements Action {
  readonly type = ConsoleActionTypes.LoadItems;
}

export type ConsoleActions = LoadItems;
