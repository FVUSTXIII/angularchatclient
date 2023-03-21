import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../Shared/shared/shared.module';
import { CageDialogComponent } from '../cage-dialog/cage-dialog.component';


@NgModule({
  declarations: [
    CageDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

  ]
})
export class CageModule { }
