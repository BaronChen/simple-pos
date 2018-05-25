import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import {ItemsActionTypes, ItemsAction, LoadItems, LoadItemsSuccess } from '../actions/items.actions';
import { ConsoleService } from '../services/console.service';
import { IItem } from '../models/item';

@Injectable()
export class ItemsEffects {

  constructor(private actions$: Actions, private consoleService: ConsoleService) {}

  @Effect()
  loadItemsEffect$: Observable<Action> =
    this.actions$.ofType(ItemsActionTypes.LoadItems).pipe(
      mergeMap((action: LoadItems) => {
        return this.consoleService.getItems().pipe(
          map((data: IItem[]) => {
            return new LoadItemsSuccess(data);
          })
        );
      })
    );
}
