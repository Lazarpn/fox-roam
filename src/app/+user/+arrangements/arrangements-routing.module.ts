import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrangementListComponent } from './arrangement-list/arrangement-list.component';
import { ArrangementsPreviewResolver } from 'src/app/shared/resolvers/arrangements-preview.resolver';
import { ArrangementComponent } from './arrangement-list/arrangement/arrangement.component';
import { ArrangementResolver } from 'src/app/shared/resolvers/arrangement.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArrangementListComponent,
    resolve: {
      arrangements: ArrangementsPreviewResolver,
    },
  },
  {
    path: ':id',
    component: ArrangementComponent,
    resolve: {
      arrangements: ArrangementResolver,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrangementsRoutingModule {}
