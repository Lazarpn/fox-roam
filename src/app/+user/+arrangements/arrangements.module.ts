import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/loaders/http-loader-factory';
import { ArrangementsRoutingModule } from './arrangements-routing.module';
import { ArrangementListComponent } from './arrangement-list/arrangement-list.component';
import { ArrangementPreviewComponent } from './arrangement-list/arrangement-preview/arrangement-preview.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ArrangementListComponent,
    ArrangementPreviewComponent,
    ArrangementPreviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ArrangementsRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ArrangementsModule {}
