import { Observable, of, throwError as observableThrowError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class UserService {
    constructor(private http: HttpClient, location: Location) {
        // console.log("windown location : ", window.location);
        // console.log("location protocal : ", location.protocol);
        // console.log("location host : ", location.host);
        // console.log("location hostname : ", location.hostname);
        // console.log("location herf : ", location.href);
        // console.log("location port : ", location.port);
    }

    getUsers(): Observable<any> {
        return this.http.get<any>(environment.apiUrl + "/api/users");
    }

    getUser(id): Observable<any> {
        return this.http.get<any>(environment.apiUrl + "/api/users/"+id);
    }

    handleError(err): Promise<any> {
        return Promise.reject(err);
    }
};



class User {
    username: string;
    lastname: string;
    firstname: string;
    constructor(username: string, firstname: string, lastname: string) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}