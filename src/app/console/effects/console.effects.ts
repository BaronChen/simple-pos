import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConsoleActions, ConsoleActionTypes } from '../actions/console.actions';

@Injectable()
export class ConsoleEffects {

  @Effect({dispatch: false})
  effect$ = this.actions$.ofType(ConsoleActionTypes.LoadItems);

  constructor(private actions$: Actions) {}
}
