import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

interface User {
  username: string;
}
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit{
    ngOnInit(): void {}  
    @Output() chosenUser : EventEmitter<string> = new EventEmitter<string>();
    username! : string;
    userFlag: Boolean = true;
    
    onInputChange(a:any) : void {
      console.log(a);
      this.username = a;
      if (this.username.length > 0) {
        this.userFlag = false;
      } else {
        this.userFlag = true;
      }
    }
    

}
