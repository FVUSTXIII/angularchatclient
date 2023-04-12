import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  oDialog! : any;
  cageId!: string;
  constructor(public dialog: MatDialog, private _router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    
    this.route.params.subscribe((params: Params) => {
      this.cageId = params['cageId'];
    });
    console.log("tenemos cage id: ", this.cageId)
    this.openDialog('0ms', '0ms');
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UserDialogComponent, {
       height: '450px',
       width: '300px',
       enterAnimationDuration,
       exitAnimationDuration,
     }).afterClosed().subscribe((result : any) => {
       console.log("where are you taking me? ", result);
       this._router.navigate(['/ChatRoom', this.cageId, result]);
     });
  }

}
