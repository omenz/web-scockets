import {Component, OnInit} from '@angular/core';
import {WebSocketService} from './core/web-socket.service';
import {Message} from '@stomp/stompjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private webSocketSerivice: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketSerivice.subscribe()
    .map((message: Message) => {
      return message.body;
    }).subscribe((msg_body: string) => {
      console.log(`Received: ${msg_body}`);
      this.title = msg_body;
    });
  }
}
