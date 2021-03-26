import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe
  ) {
  }

  getCours(domain: string, profId: string, date: Date): Observable<any> {
    return this.httpClient.get(environment.api.lessons.filter, {
      params: {
        domain: domain ? domain : null,
        profId: profId ? profId : '0',
        date: date ? this.datePipe.transform(date, 'dd-MM-yyyy') : null
      }
    });
  }

  getCoursById(id: string): Observable<any> {
    return this.httpClient.get(environment.api.lessons.byId.replace('${id}', id));
  }

  updateCours(id: string, cours: any): Observable<any> {
    return this.httpClient.put(environment.api.lessons.update.replace('${id}', id), cours);
  }

  createCours(cours: any): Observable<any> {
    return this.httpClient.post(environment.api.lessons.create, cours);
  }

  deleteCours(id: string): Observable<any> {
    return this.httpClient.delete(environment.api.lessons.delete.replace('${id}', id));
  }
}
