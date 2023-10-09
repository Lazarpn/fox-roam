import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface SignInModalDialogData {
  dataa: any;
  // event: Event;
  // isCoverImage: boolean;
}

@Component({
  selector: 'fr-sign-in',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss'],
})
export class SignInModalComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('nesto');
    // const dialogRef = this.dialog.open(SignInModalComponent, {
    //   width: '600px',
    //   // panelClass: 'fullscreen-dialog',
    //   // data: {
    //   // dataa: event,
    //   // } as SignInModalDialogData,
    // });
  }
}
