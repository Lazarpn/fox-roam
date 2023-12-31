import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedResolver } from './shared/resolvers/authenticated.resolver';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { UnauthenticatedGuard } from './shared/guards/unauthenticated.guard';
import { UnauthenticatedModule } from './+unauthenticated/unauthenticated.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    resolve: { userData: AuthenticatedResolver },
    loadChildren: () =>
      import('./+authenticated/authenticated.module').then(m => m.AuthenticatedModule),
  },
  {
    path: '',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./+unauthenticated/unauthenticated.module').then(m => m.UnauthenticatedModule),
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FrRoutingModule {}
