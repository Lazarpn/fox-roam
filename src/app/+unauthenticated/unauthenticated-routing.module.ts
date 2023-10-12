import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInModalComponent,
  },
  {
    path: 'sign-up',
    component: SignUpModalComponent,
  },
  {
    path: 'arrangements',
    loadChildren: () =>
      import('../+user/+arrangements/arrangements.module').then(m => m.ArrangementsModule),
  },
  {
    path: 'agencies',
    loadChildren: () => import('../+user/+agencies/agencies.module').then(m => m.AgenciesModule),
  },
  {
    path: 'recommendations',
    loadChildren: () =>
      import('../+user/+recommendations/recommendations.module').then(m => m.RecommendationsModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedRoutingModule {}
