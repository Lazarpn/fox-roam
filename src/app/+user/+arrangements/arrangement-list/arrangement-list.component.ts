import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArrangementsDataService } from 'src/app/shared/services/arrangements-data.service';
import { ArrangementsService } from 'src/app/shared/services/arrangements.service';

@Component({
  selector: 'fr-arrangement-list',
  templateUrl: './arrangement-list.component.html',
  styleUrls: ['./arrangement-list.component.scss'],
})
export class ArrangementListComponent implements OnInit {
  arrangements: any[] = [
    { id: 'nana1' },
    { id: 'nana2' },
    { id: 'nana3' },
    { id: 'nana4' },
    { id: 'nana5' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private arrangementsService: ArrangementsService,
    private arrangementsDataService: ArrangementsDataService
  ) {}

  ngOnInit(): void {}

  onOpenArrangment(id: string) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
