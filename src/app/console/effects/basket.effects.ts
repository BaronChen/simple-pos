import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { BasketActionTypes, SubmitOrder, ClearBasket } from '../actions/basket.actions';
import { mergeMap, withLatestFrom, map } from 'rxjs/operators';
import { getTotal } from '../reducers';
import { ConsoleService } from '../services/console.service';


@Injectable()
export class BasketEffects {

  constructor(private actions$: Actions, private store$: Store<any>, private consoleService: ConsoleService) {}

  @Effect()
  submitOrderEffect$: Observable<any> =
    this.actions$.ofType(BasketActionTypes.SubmitOrder).pipe(
      withLatestFrom(this.store$.select(getTotal)),
      mergeMap(([action, total]: [SubmitOrder, number]) => {
        const result = this.consoleService.submitPurchase(total);
        if (result) {
          return of(new ClearBasket());
        } else {
          // TODO: handle error here.
          alert('fail to submit purchase!');
          return of({type: 'NO_ACTION'});
        }
      })
    );
}
