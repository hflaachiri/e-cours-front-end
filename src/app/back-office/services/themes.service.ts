import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getThemes(): Observable<any>{
    return this.httpClient.get(environment.api.domains.all);
  }
}
