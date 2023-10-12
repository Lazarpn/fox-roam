import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  SignInModalComponent,
  SignInModalDialogData,
} from 'src/app/+unauthenticated/sign-in-modal/sign-in-modal.component';
import {
  SignUpModalComponent,
  SignUpModalDialogData,
} from 'src/app/+unauthenticated/sign-up-modal/sign-up-modal.component';

@Injectable({ providedIn: 'root' })
export class ModalsService {
  constructor(private dialog: MatDialog) {}

  openSignInModal() {
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: '600px',
      panelClass: 'fullscreen-dialog',
      data: {
        dataa: event,
      } as SignInModalDialogData,
    });
  }

  openSignUpModal() {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: '1400px',
      panelClass: 'fullscreen-dialog',
      data: {
        dataa: event,
      } as SignUpModalDialogData,
    });
  }
}
