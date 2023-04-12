import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HubConnectionService {

 

  public hubConnection: HubConnection | undefined;
  private receivedMessages : BehaviorSubject<{user: string, content: string} | null> = new BehaviorSubject<{user: string, content: string} | null>(null);
  private errorMsg : BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {
    this.hubConnection = new HubConnectionBuilder().withUrl('http://192.168.100.5:44325/chatHub', {
      transport: HttpTransportType.WebSockets
    }).build();

    this.hubConnection?.on('SendMessageAsync', (user: string, content: string) => {
      this.receivedMessages.next({user, content});
    })

    this.hubConnection?.on('ErrorMessage', (data: string) => {
      this.errorMsg.next(data);
    });
  }
  public startConnection (username : string, roomid : string) : void  {

    this.hubConnection?.start().then(() => {
      console.log('established connection')
      this.hubConnection?.send('OnConnectedAsync', username, roomid);
      
    }).catch(err => console.error('there was an error establishing this connection', err));
  }
  public addChatMessageListener(onReceiveMessage: (user: string, content: string) => void): void{
    this.hubConnection?.on('ReceiveMessage', onReceiveMessage);
  }

  public onReceiveMessage(): Observable<{user: string, content: string} | null> {
    return this.receivedMessages.asObservable();
  }

  public onConflictFound() : Observable<string> {
    return this.errorMsg.asObservable();
  }
  public SendMessageAsync = (message: string, username: string, groupname: string) => {
    this.hubConnection?.invoke('SendMessageAsync',groupname, username,  message).catch(err => console.error(err));
  }


}
