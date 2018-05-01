import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WebSocketService} from './core/web-socket.service';
import {Message} from '@stomp/stompjs';
import 'rxjs/add/operator/map';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response: any[] = [];
  @ViewChild('message')
  message: ElementRef;

  constructor(private webSocketService: WebSocketService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.webSocketService.subscribe()
      .map((message: Message) => {
        return message.body;
      }).subscribe((message: string) => {
        console.log(`Received: ${message}`);
        this.response.unshift(JSON.parse(message));
        this.message.nativeElement.value = null;
        this.cd.detectChanges();
    });
  }


  send(message: string): void {
    this.webSocketService.send(message);
  }
}
