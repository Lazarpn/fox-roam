import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExceptionDetail } from 'src/app/shared/exception-detail';
import { AuthResponseModel } from 'src/app/shared/models/user/auth-response.model';
import { GoogleLoginModel } from 'src/app/shared/models/user/google-login-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fr-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.scss'],
})
export class GoogleSignInComponent implements OnInit {
  constructor(
    private authService: AuthService,
    // private utilityService: UtilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    google.accounts.id.initialize({
      // client_id: environment.googleClientId,
      client_id: 'nana',
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById('google-button'),
      { theme: 'outline', size: 'large', width: '100%', access_type: 'offline', prompt: 'consent' }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  async handleCredentialResponse(response: any) {
    const googleModel = { idToken: response.credential } as GoogleLoginModel;
    // this.authService.googleLogin(googleModel).subscribe({
    //   next: (model: AuthResponseModel) => {
    //     this.authService.handleAuthentication(model);
    //     this.router.navigate(['/meals']);
    //   },
    //   error: (exceptions: ExceptionDetail[]) => {
    //     this.handleErrors(exceptions);
    //   },
    // });
  }

  private handleErrors(exceptions: ExceptionDetail[]) {
    // const errors: TranslationMessage[] = this.utilityService.getErrorMessages(exceptions);
    // console.log(errors);
    // this.utilityService.displaySnackBarErrors(errors);
  }
}
