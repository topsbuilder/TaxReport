/*** */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor(private http: Http) {}
//  isAuthenticated(): Observable<boolean> {
//    return this.http.get('/api/user').map((res) => res.json());
//  }
}