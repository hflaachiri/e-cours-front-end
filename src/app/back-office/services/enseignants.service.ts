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
    return this.httpClient.get(environment.api.professors.all);
  }

  updateEnseignants(id: string, enseignant: any): Observable<any>{
    return this.httpClient.put(environment.api.professors.update.replace('${id}', id), enseignant);
  }

  createEnseignant(enseignant: any): Observable<any>{
    return this.httpClient.post(environment.api.professors.create, enseignant);
  }

  deleteEnseignant(id: string): Observable<any>{
    return this.httpClient.delete(environment.api.professors.delete.replace('${id}', id));
  }

}
