import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit{
  @Input() title! : string;
  @Input() errMsg! : string;

  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {title: string, errMsg: string}) {}
  ngOnInit(): void {
    console.log(this.data)
    this.title = this.data.title;
    this.errMsg = this.data.errMsg;
  }

}
