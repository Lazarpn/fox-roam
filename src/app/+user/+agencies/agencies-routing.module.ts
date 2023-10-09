import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgenciesPreviewResolver } from 'src/app/shared/resolvers/agencies-preview.resolver';
import { AgencyComponent } from './agency-list/agency/agency.component';
import { AgencyResolver } from 'src/app/shared/resolvers/agency.resolver';

const routes: Routes = [
  {
    path: '',
    component: AgencyListComponent,
    resolve: {
      arrangements: AgenciesPreviewResolver,
    },
  },
  {
    path: ':id',
    component: AgencyComponent,
    resolve: {
      arrangements: AgencyResolver,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
