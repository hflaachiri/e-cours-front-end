import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export const TOKEN_KEY = 'access-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {
  }

  /**
   * Get the token from the localstorage
   */
  getToken(): string {
    return this.jwtHelper.tokenGetter();
  }

  /**
   * check from localstorage if token is valid
   */
  isTokenValid(): boolean {
    const token = this.jwtHelper.tokenGetter();
    return token && !this.jwtHelper.isTokenExpired();
  }

  /**
   * call api to login the user
   */
  login(loginForm: { email: string, password: string }): Observable<any> {
    return this.http.get(environment.mock.auth.login); // just for mock
    // return this.http.post(environment.api.auth.login, loginForm);
  }

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }



}
