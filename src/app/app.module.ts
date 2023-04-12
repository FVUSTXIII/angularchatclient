import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CageComponent } from './Modules/Cage/cage/cage.component';
import { UserComponent } from './Modules/User/user/user.component';
import { SharedModule } from './Shared/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CageDialogComponent } from './Modules/Cage/cage-dialog/cage-dialog.component';
import { UserDialogComponent } from './Modules/User/user-dialog/user-dialog.component';
import { ChatContainerComponent } from './Modules/chat/chat-container/chat-container.component';
import { ChatReceiverComponent } from './Modules/chat/chat-receiver/chat-receiver.component';
import { ChatSenderComponent } from './Modules/chat/chat-sender/chat-sender.component';
import { HubConnectionService } from './Service/hub-connection.service';
import { ErrorDialogComponent } from './Modules/chat/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CageComponent,
    CageDialogComponent,
    UserComponent,
    UserDialogComponent,
    ChatContainerComponent,
    ChatReceiverComponent,
    ChatSenderComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    HubConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
