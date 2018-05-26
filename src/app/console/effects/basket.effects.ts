import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { BasketActionTypes, SubmitOrder, ClearBasket, ShowReceipt } from '../actions/basket.actions';
import { tap, withLatestFrom } from 'rxjs/operators';
import { getTotal } from '../reducers';
import { ConsoleService } from '../services/console.service';
import { MatDialog } from '@angular/material';
import { IReceiptData, ReceiptComponent } from '../components/receipt/receipt.component';


@Injectable()
export class BasketEffects {

  constructor(private actions$: Actions, private store$: Store<any>, private consoleService: ConsoleService, private dialog: MatDialog) {}

  @Effect({dispatch: false})
  submitOrderEffect$ =
    this.actions$.ofType(BasketActionTypes.SubmitOrder).pipe(
      withLatestFrom(this.store$.select(getTotal)),
      tap(([action, total]: [SubmitOrder, number]) => {
        const result = this.consoleService.submitPurchase(total);
        if (!result) {
          alert('fail to submit purchase!');
        }
      })
    );

  @Effect({dispatch: false})
  showReceiptEffect$ =
    this.actions$.ofType(BasketActionTypes.ShowReceipt).pipe(
      tap((action: ShowReceipt) => {
        const data: IReceiptData = {
          items: action.items,
          amount: action.amount
        };
        this.dialog.open(ReceiptComponent, {
          data: data
        });
      })
    );
}
