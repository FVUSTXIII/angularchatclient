import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared/shared.module';
import {MatCardModule} from '@angular/material/card'

import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatSenderComponent } from './chat-sender/chat-sender.component';
import { ChatReceiverComponent } from './chat-receiver/chat-receiver.component';
import { HubConnectionService } from 'src/app/Service/hub-connection.service';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    ChatContainerComponent,
    ChatSenderComponent,
    ChatReceiverComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
    
  ],
  providers: [
    HubConnectionService
  ]
})
export class ChatModule { }
