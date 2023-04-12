import { Component, Input, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { Message } from 'src/app/Models/message.model';
import { HubConnectionService } from 'src/app/Service/hub-connection.service';

@Component({
  selector: 'app-chat-receiver',
  templateUrl: './chat-receiver.component.html',
  styleUrls: ['./chat-receiver.component.css']
})
export class ChatReceiverComponent implements OnInit{
  @Input() user! : string;
  @Input() cage! : string;
  messages: Message[] = [
  
  ]; 
  msg : Message = {
    content: '',
    sender: '',
    timestamp: '',

  }
  constructor(private hubConnectionService: HubConnectionService) {}
  ngOnInit(): void {
    this.hubConnectionService.onReceiveMessage().subscribe(message => {
      console.log("We received this message: ", message)
      if (message) {
        this.messages.push({
          sender: message?.user ?? '',
          content: message?.content ?? '',
          timestamp: new Date().toISOString()
        });
      }
    })
   
  }
  
  
}
