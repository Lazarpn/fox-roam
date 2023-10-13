import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../shared/loaders/http-loader-factory';
import { CommonModule } from '@angular/common';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SignInModalComponent, SignUpModalComponent, GoogleSignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    UnauthenticatedRoutingModule,
    SharedModule,
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
export class UnauthenticatedModule {}
