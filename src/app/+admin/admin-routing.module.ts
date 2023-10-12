import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'arrangements',
  //   loadChildren: () =>
  //     import('../+user/+arrangements/arrangements.module').then(m => m.ArrangementsModule),
  // },
  // {
  //   path: 'agencies',
  //   loadChildren: () => import('../+user/+agencies/agencies.module').then(m => m.AgenciesModule),
  // },
  // {
  //   path: 'recommendations',
  //   loadChildren: () =>
  //     import('../+user/+recommendations/recommendations.module').then(m => m.RecommendationsModule),
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
