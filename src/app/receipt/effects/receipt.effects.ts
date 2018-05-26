import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ReceiptActions, ReceiptActionTypes } from '../actions/receipt.actions';

@Injectable()
export class ReceiptEffects {

  constructor(private actions$: Actions) {}

  // @Effect()
  // effect$ = this.actions$.ofType(ReceiptActionTypes.LoadReceipts);
}
