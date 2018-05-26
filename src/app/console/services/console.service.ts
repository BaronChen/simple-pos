import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from '../models/item';
import { Observable } from 'rxjs';
import { WebsocketService } from '../../shared/services/websocket.service';
import { IPurchaseEvent } from '../models/purchase-event';
import { Store } from '@ngrx/store';
import { ShowReceipt, ClearBasket } from '../actions/basket.actions';
import { withLatestFrom } from 'rxjs/operators';
import { getBasketItemDetails } from '../reducers';
import { IBasketItemDetail } from '../models/basket-item';


@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http: HttpClient, private webSocketService: WebsocketService, private store$: Store<any>) {
    // Item data should come from service, doing this for demo purpose
    this.webSocketService.registerPurchaeEvent().pipe(
      withLatestFrom(this.store$.select(getBasketItemDetails))
    ).subscribe(
      ([amount, items]: [number, IBasketItemDetail[]]) => {
        this.store$.dispatch(new ShowReceipt(amount, items));
        this.store$.dispatch(new ClearBasket());
      }
    );
  }

  public getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('/assets/items.json');
  }

  public submitPurchase(amount: number): boolean {
    const event: IPurchaseEvent = {
      event: 'purchase',
      amount: amount
    };
    return this.webSocketService.sendMessage(event);
  }
}
