import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HubConnectionService } from 'src/app/Service/hub-connection.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit  {
  cageId!: string;
  username!:string;
  showErrorDialog : boolean = false;
  constructor(public dialog: MatDialog, private _router: Router, private route: ActivatedRoute, private hubConnectionService: HubConnectionService) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      this.cageId = params['cageid'];
      this.username = params['username'];
      
      console.log(this.cageId, " ", this.username)
      this.hubConnectionService.startConnection(this.username, this.cageId);
      this.hubConnectionService.onConflictFound().subscribe((error)=>{
        if (error) {
          let obj = {
            width: '25%',
            height: '25%',
            data: {title: 'Connection Conflict!', errMsg: error}
          }
          const dialog = this.dialog.open(ErrorDialogComponent, obj);

          dialog.afterClosed().subscribe(result => {
            this._router.navigate(['/']);
          })
        }
      });
    });
  }


}
