import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getEnseignants(): Observable<any>{
    return this.httpClient.get(environment.mock.enseignants.findAll);
  }
}
