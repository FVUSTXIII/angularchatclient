import { NgModule } from '@angular/core';
import { SharedModule } from '../../../Shared/shared/shared.module';
import { CageComponent } from './cage.component';
import { CageDialogComponent } from '../cage-dialog/cage-dialog.component';

@NgModule({
  declarations: [
    CageComponent,
    CageDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
  ]
})
export class CageModule { }
