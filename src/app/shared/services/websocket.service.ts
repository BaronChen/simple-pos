import { Injectable } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  ws: $WebSocket;

  constructor() {
    this.ws = new $WebSocket('ws://demos.kaazing.com/echo', null, { reconnectIfNotNormalClose: true });

    this.ws.onMessage(
      (msg: MessageEvent) => {
        console.log('onMessage ', msg.data);
      },
      { autoApply: false }
    );
  }

  public sendMessage(data: any): Observable<any> {
    return this.ws.send(data, WebSocketSendMode.Direct);
  }

}
