import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UnauthenticatedRoutingModule,
    SharedModule,
    HttpClientModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    // }),
  ],
})
export class UnauthenticatedModule {}
