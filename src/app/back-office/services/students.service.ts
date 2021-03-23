import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStudents(): Observable<any>{
    return this.httpClient.get(environment.api.students.all);
  }

  updateStudent(id: string, student: any): Observable<any>{
    return this.httpClient.put(environment.api.students.update.replace('${id}', id), student);
  }

  createStudent(student: any): Observable<any>{
    return this.httpClient.post(environment.api.students.create, student);
  }

  deleteStudent(id: string): Observable<any>{
    return this.httpClient.delete(environment.api.students.delete.replace('${id}', id));
  }
}
