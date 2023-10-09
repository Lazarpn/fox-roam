import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { ArrangementsPreviewResolver } from '../shared/resolvers/arrangements-preview.resolver';

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
    component: SignUpModalComponent,
    resolve: {
      arrangements: ArrangementsPreviewResolver,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedRoutingModule {}
