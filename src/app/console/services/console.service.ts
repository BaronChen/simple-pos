import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from '../models/item';
import { Observable } from 'rxjs';
import { WebsocketService } from '../../shared/services/websocket.service';
import { IPurchaseEvent } from '../models/purchase-event';


@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http: HttpClient, private webSocketService: WebsocketService) { }

  public getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('/assets/items.json');
  }

  public submitPurchase(amount: number): Observable<any> {
    const event: IPurchaseEvent = {
      event: 'purchase',
      amount: amount
    };
    return this.webSocketService.sendMessage(event);
  }
}
