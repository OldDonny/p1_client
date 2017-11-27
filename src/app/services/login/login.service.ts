import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx'
import { isNil } from 'ramda';

import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  static api: string = '/api/login'
  user: any 

  constructor(private http: HttpClient) { }

  login(user: {username: string, password: string}): Observable<any> {
    return this.http
      .post(LoginService.api, user)
      .map(user => this.user === user)
  }

  me(){
    if (isNil(this.user)){
      return
    }
    return Observable.of(this.user)
  }
}
