import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ArrangementResolver implements Resolve<void> {
  private url = environment.url + '/api';

  // constructor(private http: HttpClient, private profileService: ProfileService) {
  //   console.log('FIXME:popraviti okidanje dvaputa ili sta god');
  // }

  resolve(): void {
    return;
    // return this.http.get<User>(this.url + '/users/me').pipe(
    //   tap((user: User) => {
    //     this.profileService.setUser(user);
    //   })
    // );
  }
}
