import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import * as AuthActions from './auth.actions';

type loginResponse = { jwtToken: string, message: string, loggedIn: boolean, time: number };
type emailVerifyResponse = { message: string, status: boolean }

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN),
      switchMap((authData: AuthActions.Login) => {
        return this.http
          .post<loginResponse>(
            `${environment.baseUrl}/login`,
            {
              email: authData.payload.email,
              password: authData.payload.password
            }
          )
          .pipe(
            map(response => {
              // Dispatch a success action with the response data
              if (response.jwtToken) {
                // save the token in local storage
                localStorage.setItem('userData', JSON.stringify(response));

                // set a timer to clear the local Storage
                setTimeout(() => {
                  localStorage.clear();
                }, response.time)
                // navigate to user home
                this.router.navigate(['/user/']);
                // make loggedInStatus true. Because login process successfully completed
                return new AuthActions.LoginComplete(true);
              } else {
                // make loggedInStatus false. Because login failed
                return new AuthActions.LoginComplete(false);
              }
            })
          )
      })
    )
  );

  verifyEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.VERIFY_EMAIL_START),
      switchMap((verificationData: AuthActions.VerifyEmailStart) => {
        return this.http
          .get<emailVerifyResponse>(
            `${this.baseRoute}verify/${verificationData.payload.id}/${verificationData.payload.token}`
          )
          .pipe(
            map(response => {
              // Check verified or not
              if (response.status) {
                console.log(response)
                // change the status of verified
                return new AuthActions.VerificationConplete(true);
              } else {
                // change the status of verified
                console.log(response)
                return new AuthActions.VerificationConplete(false);
              }
            })
          )
      })
    )
  );

  baseRoute = 'http://localhost:3000/user/';

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) { }
}
