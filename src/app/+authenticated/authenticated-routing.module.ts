import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'admin',
    loadChildren: () => import('../+admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
