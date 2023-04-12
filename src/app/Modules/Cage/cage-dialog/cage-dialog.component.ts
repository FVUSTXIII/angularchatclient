import { Component, EventEmitter, OnInit, Output } from '@angular/core';
interface Cage {
  id: string;
  name: string;
}
@Component({
  selector: 'app-cage-dialog',
  templateUrl: './cage-dialog.component.html',
  styleUrls: ['./cage-dialog.component.css']
})
export class CageDialogComponent implements OnInit{
  
  ngOnInit(): void {
  }
  @Output() cageChanged : EventEmitter<Cage> = new EventEmitter<Cage>();
  selectedCage! : Cage;
  
  cageFlag: Boolean = true;
  cageOptions : Cage[] = [
    {
      id : "1",
      name : "Cage 1"
    },
    {
      id : "2",
      name : "Cage 2"
    },
    {
      id : "3",
      name : "Cage 3"
    }
  ];
  onChange(a : any) : void {
    this.selectedCage = a.value;
    this.cageFlag = false;
    this.cageChanged.emit(this.selectedCage);
  }
}
