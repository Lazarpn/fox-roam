import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/loaders/http-loader-factory';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgencyComponent } from './agency-list/agency/agency.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyPreviewComponent } from './agency-list/agency-preview/agency-preview.component';

@NgModule({
  declarations: [AgencyListComponent, AgencyPreviewComponent, AgencyComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AgenciesRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AgenciesModule {}
