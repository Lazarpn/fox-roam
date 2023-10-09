import { Injectable } from '@angular/core';
import { RecommendationService } from './recommendation.service';

@Injectable({ providedIn: 'root' })
export class ArrangementsService {
  constructor(private recommendationService: RecommendationService) {}
}
