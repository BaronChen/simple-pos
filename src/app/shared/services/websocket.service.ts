import { Injectable } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';
import { Observable, Subject } from 'rxjs';
import { IPurchaseEvent } from '../../console/models/purchase-event';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  ws: $WebSocket;

  private purchaseEventBusinessSubject: Subject<number>;

  constructor() {
    this.ws = new $WebSocket('ws://demos.kaazing.com/echo', null, { reconnectIfNotNormalClose: true });
    this.purchaseEventBusinessSubject = new Subject<number>();
    this.ws.onMessage(
      (msg: MessageEvent) => {
        console.log('Received Message: ', msg.data);
        const data: IPurchaseEvent = JSON.parse(msg.data);
        if (data.event === 'purchase') {
          this.purchaseEventBusinessSubject.next(data.amount);
        }
      },
      { autoApply: false }
    );
  }

  public sendMessage(data: any): boolean {
    const result = this.ws.send(data, WebSocketSendMode.Direct);
    return result;
  }

  public registerPurchaeEvent(): Observable<number> {
    return this.purchaseEventBusinessSubject.asObservable();
  }

}
