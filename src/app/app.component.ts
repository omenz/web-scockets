import {Component, OnInit} from '@angular/core';
import {WebSocketService} from './core/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private webSocketSerivice: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketSerivice.subscribe();
  }
}
