import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { BasketActionTypes, SubmitOrder } from '../actions/basket.actions';
import { tap, withLatestFrom } from 'rxjs/operators';
import { getTotal } from '../reducers';
import { ConsoleService } from '../services/console.service';


@Injectable()
export class BasketEffects {

  constructor(private actions$: Actions, private store$: Store<any>, private consoleService: ConsoleService) {}

  @Effect({dispatch: false})
  submitOrderEffect$ =
    this.actions$.ofType(BasketActionTypes.SubmitOrder).pipe(
      withLatestFrom(this.store$.select(getTotal)),
      tap(([action, total]: [SubmitOrder, number]) => {
        this.consoleService.submitPurchase(total);
      })
    );
}
