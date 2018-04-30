import {Injectable} from '@angular/core';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export const stompConfig: StompConfig = {
  // Which server?
  url: 'ws://127.0.0.1:4200/ws_api',

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: 'admin',
    passcode: 'admin'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

@Injectable()
export class WebSocketService {

  constructor(private stompService: StompService) { }

  public subscribe(): void {
    const stomp_subscription: Observable<Message> = this.stompService.subscribe('/topic/greetings');

    stomp_subscription.map((message: Message) => {
      return message.body;
    }).subscribe((msg_body: string) => {
      console.log(`Received: ${msg_body}`);
    });
  }
}
