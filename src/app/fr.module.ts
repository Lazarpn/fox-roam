import { NgModule } from '@angular/core';
import { FrComponent } from './fr.component';
import { BrowserModule } from '@angular/platform-browser';
import { FrRoutingModule } from './fr-routing.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { HttpLoaderFactory } from './shared/loaders/http-loader-factory';

@NgModule({
  declarations: [FrComponent],
  imports: [
    BrowserModule,
    FrRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [FrComponent],
})
export class FrModule {}
