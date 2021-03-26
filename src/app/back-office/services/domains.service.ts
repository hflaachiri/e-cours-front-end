import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDomains(): Observable<any>{
    return this.httpClient.get(environment.api.domain.all);
  }
}
