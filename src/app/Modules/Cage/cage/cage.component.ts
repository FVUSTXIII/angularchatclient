import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CageDialogComponent } from '../cage-dialog/cage-dialog.component';

@Component({
  selector: 'app-cage',
  templateUrl: './cage.component.html',
  styleUrls: ['./cage.component.css']
})
export class CageComponent  implements OnInit {
  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.openDialog('0ms', '0ms')
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CageDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
