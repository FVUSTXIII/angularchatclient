import { Component, Input, OnInit } from '@angular/core';
import { HubConnectionService } from 'src/app/Service/hub-connection.service';

@Component({
  selector: 'app-chat-sender',
  templateUrl: './chat-sender.component.html',
  styleUrls: ['./chat-sender.component.css']
})
export class ChatSenderComponent implements OnInit  {

  @Input() username! : string;
  @Input() CageId! : string;
  message! : string;

  constructor(private hubservice : HubConnectionService) {}
  ngOnInit(): void {
  }

  sendMessage() {
    if (this.message) {
      this.hubservice.SendMessageAsync(this.message, this.username, this.CageId);
      this.message = '';
    }
  }
}
