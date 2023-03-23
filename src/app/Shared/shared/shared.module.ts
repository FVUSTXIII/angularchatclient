import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule, 
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class SharedModule { }
