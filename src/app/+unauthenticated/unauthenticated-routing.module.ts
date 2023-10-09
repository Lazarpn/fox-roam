import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { ArrangementsPreviewResolver } from '../shared/resolvers/arrangements-preview.resolver';
import { ArrangementsModule } from '../+user/+arrangements/arrangements.module';

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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedRoutingModule {}
