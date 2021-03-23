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

  getCours(theme: string, professor: string, date: Date): Observable<any> {
    return this.httpClient.get(environment.api.lessons.all, {
      params: {
        theme,
        professor,
        date: this.datePipe.transform(date, 'dd-MM-yyyy')
      }
    });
  }

  getCoursById(id: string): Observable<any> {
    const url = environment.mock.cours.findById.replace('${id}', id);
    return this.httpClient.get(environment.mock.cours.findById.replace('${id}', id));
  }
}
