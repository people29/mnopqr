import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SalaryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('/api/salary');
  }

  save(data): Observable<any>  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/api/salary/save', data,  { headers, observe: 'response' });
  }
}
