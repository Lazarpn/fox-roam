import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SignInModalComponent,
    private dialogRef: MatDialogRef<SignInModalDialogData>
  ) {}

  ngOnInit(): void {
    console.log('nesto');
  }
}
