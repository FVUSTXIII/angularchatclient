import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CageComponent } from './Modules/Cage/cage/cage.component';
import { UserComponent } from './Modules/User/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Shared/shared/shared.module';
import { CageModule } from './Modules/Cage/cage/cage.module';

@NgModule({
  declarations: [
    AppComponent,
    CageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
