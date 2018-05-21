import { Observable, of, throwError as observableThrowError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    getUsers() {
        return this.http.get("http://localhost:9090/users");
    }

    getUser(id) {
        return this.http.get("http://localhost:9090/users/"+id);
    }

    handleError(err): Promise<any> {
        return Promise.reject(err);
    }
};