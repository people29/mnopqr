import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salary } from '../models/salary.model';
import { environment } from '../../environments/environment';

@Injectable()
export class SalaryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Salary[]> {
    return this.http.get<Salary[]>(environment.apiUrl + '/api/salary');
  }

  getByYear(year: string): Observable<Salary[]> {
    return this.http.get<Salary[]>(environment.apiUrl + '/api/salary/' + year);
  }

  save(data: Salary): Observable<any>  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.apiUrl + '/api/salary', data,  { headers, observe: 'response' });
  }
}
