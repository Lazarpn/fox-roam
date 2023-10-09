import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RecommendationService } from './recommendation.service';

@Injectable({ providedIn: 'root' })
export class AgenciesDataService {
  private url: string = `${environment.url}/api`;

  constructor(private http: HttpClient, private recommendationService: RecommendationService) {}
}
