import { Component, OnInit } from '@angular/core';

export interface SignInComponentDialogData {
  dataa: any;
  // event: Event;
  // isCoverImage: boolean;
}

@Component({
  selector: 'fr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const dialogRef = this.dialog.open(, {
    //   width: '600px',
    //   panelClass: 'fullscreen-dialog',
    //   data: {
    //     dataa: event,
    //   } as SignInComponentDialogData,
    // });
  }
}
