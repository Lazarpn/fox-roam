import { Injectable } from '@angular/core';
import {
  AUTUMN_PRIMARY_COLOR,
  AUTUMN_PRIMARY_DARK_COLOR,
  SPRING_PRIMARY_COLOR,
  SPRING_PRIMARY_DARK_COLOR,
  SUMMER_PRIMARY_COLOR,
  SUMMER_PRIMARY_DARK_COLOR,
  WINTER_PRIMARY_COLOR,
  WINTER_PRIMARY_DARK_COLOR,
} from '../colors';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  constructor() {}

  setWebsitePrimaryColorBasedOnDate() {
    const currentMonth = new Date().getMonth() + 1;

    if (currentMonth >= 3 && currentMonth <= 5) {
      this.setWebsitePrimaryColors(SPRING_PRIMARY_COLOR, SPRING_PRIMARY_DARK_COLOR);
    } else if (currentMonth >= 6 && currentMonth <= 8) {
      this.setWebsitePrimaryColors(SUMMER_PRIMARY_COLOR, SUMMER_PRIMARY_DARK_COLOR);
    } else if (currentMonth >= 9 && currentMonth <= 11) {
      this.setWebsitePrimaryColors(AUTUMN_PRIMARY_COLOR, AUTUMN_PRIMARY_DARK_COLOR);
    } else {
      this.setWebsitePrimaryColors(WINTER_PRIMARY_COLOR, WINTER_PRIMARY_DARK_COLOR);
    }
  }

  setWebsitePrimaryColors(primaryColor: string, primaryDarkColor: string) {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', primaryColor);
    root.style.setProperty('--color-primary-dark', primaryDarkColor);
  }
}
