import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
// import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login({username, password}): Observable<any> {
    return  this.http.post<any>(`${environment.apiUrl}/auth/login`, { login: username, password: password })
      .pipe(map(user => {
        if (user && user.token) this.setToken(user.token);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  setToken(token: string) {
    localStorage.setItem('currentUser', token);
  }

  getToken() {
    return localStorage.getItem('currentUser');
  }

  isLogin(): boolean {
    if (environment.env === "dev") return true;
    return !this.jwtHelper.isTokenExpired(this.getToken());
  }

}
