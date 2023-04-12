import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/Shared/shared/shared.module';
import { UserComponent } from './user.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDialogComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UserModule { }
