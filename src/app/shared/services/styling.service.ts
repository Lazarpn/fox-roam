import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StylingService {
  smallWidthPadding: string = '';
  fullWidthPadding: string = '';

  constructor() {}

  setWebsiteGlobalPadding(padding: string) {
    const root = document.documentElement;
    root.style.setProperty('--global-padding', padding);
  }
}
