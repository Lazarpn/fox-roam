import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AuthenticatedRoutingModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    // }),
  ],
})
export class AuthenticatedModule {
  constructor() {}
}
