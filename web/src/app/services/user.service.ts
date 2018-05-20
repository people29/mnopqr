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
    // private userUrl: string;

    getUsers() {
        return this.http.get("http://localhost:9090/users");
    }

    handleError(err): Promise<any> {
        console.log(err);
        return Promise.reject(err);
    }
};