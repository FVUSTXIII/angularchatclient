import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CageDialogComponent } from '../cage-dialog/cage-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cage',
  templateUrl: './cage.component.html',
  styleUrls: ['./cage.component.css']
})
export class CageComponent  implements OnInit {
  oDialog! : any;
  constructor(public dialog: MatDialog, private _router: Router) {}
  
  ngOnInit(): void {
    this.openDialog('0ms', '0ms');

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
   this.dialog.open(CageDialogComponent, {
      height: '450px',
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe((result : any) => {
      console.log("where are you taking me? ", result);
      this._router.navigate(['/Users', result.id]);
    });
  }


}
