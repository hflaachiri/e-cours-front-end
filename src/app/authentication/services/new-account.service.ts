import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  schoolYear: string;
  site: {
    name: string;
  };
}



@Injectable({
  providedIn: 'root'
})
export class NewAccountService {

  constructor(
    private http: HttpClient,
  ) { }

  signup(signUpForm: SignUpForm ): Observable<any> {
    return this.http.post(environment.api.auth.signup, signUpForm);
  }
}
