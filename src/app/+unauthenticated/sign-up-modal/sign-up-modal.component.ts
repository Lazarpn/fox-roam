import { Component, OnInit } from '@angular/core';

export interface SignUpModalDialogData {
  dataa: any;
  // event: Event;
  // isCoverImage: boolean;
}

@Component({
  selector: 'fr-sign-up',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'],
})
export class SignUpModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
